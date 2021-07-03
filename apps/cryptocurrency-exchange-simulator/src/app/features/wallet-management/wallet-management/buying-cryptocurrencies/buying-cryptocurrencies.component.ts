import { Component, OnDestroy, OnInit } from '@angular/core';
import { CurrenciesService } from '../../../../core/services/api/currencies.service';
import { ProfileService } from '../../../../core/services/api/profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormGroupConfig } from '../../../../core/services/form-group-config.type';
import { finalize, takeWhile } from 'rxjs/operators';
import { ProgressBarService } from '../../../../core/services/progress-bar.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GetUserResponse } from '../../../profile/models/profile';

@Component({
  selector: 'inzynieria-oprogramowania-buying-cryptocurrencies',
  templateUrl: './buying-cryptocurrencies.component.html',
  styleUrls: ['./buying-cryptocurrencies.component.scss'],
})
export class BuyingCryptocurrenciesComponent implements OnInit, OnDestroy {
  public accountBalance: number;
  public currency: string;
  public transactionType: string;
  public transactionForm: FormGroup;
  public currencies;
  public selectedCurrencyValue: number;
  public selectedCurrencyKey: string;
  public user: GetUserResponse;
  public currencyAmount: number;
  private _alive = true;

  constructor(
    private readonly _currenciesService: CurrenciesService,
    private readonly _profileService: ProfileService,
    private readonly _fb: FormBuilder,
    private readonly _progressBarService: ProgressBarService,
    private readonly _snackBar: MatSnackBar
  ) {
    this._progressBarService.show();
  }

  ngOnInit(): void {
    this._createForm();
    this.getInitialData();
  }

  public getInitialData() {
    this._profileService
      .getUser(JSON.parse(sessionStorage.getItem('userId')))
      .pipe(takeWhile(() => this._alive))
      .subscribe((user) => {
        this.accountBalance = user.asset?.find(
          (a) => a.currency.name === 'PLN'
        )?.amount;
        this.currency = user.asset?.find(
          (a) => a.currency.name === 'PLN'
        )?.currency.name;
        this.user = user;
      });

    this._currenciesService
      .getCurrenciesList()
      .pipe(
        takeWhile(() => this._alive),
        finalize(() => this._progressBarService.hide())
      )
      .subscribe((currencies) => (this.currencies = currencies));
  }

  private _createForm = () => {
    const config: FormGroupConfig<any> = {
      currency: ['', [Validators.required]],
      amount: ['', [Validators.required]],
    };

    this.transactionForm = this._fb.group(config);
  };

  public selectType(event) {
    this.transactionType = event?.value;
    if (this.transactionType === 'sell') {
      this.currencyAmount = this.user.asset.find(
        (a) => a.currency.name == this.selectedCurrencyKey
      ).amount;
    } else {
      this.currencyAmount = 100000;
    }
  }

  public changeCurrency(event) {
    this.selectedCurrencyValue = event?.value?.value;
    this.selectedCurrencyKey = event?.value?.key;
    if (this.transactionType === 'sell') {
      this.currencyAmount = this.user.asset.find(
        (a) => a.currency.name == this.selectedCurrencyKey
      ).amount;
    } else {
      this.currencyAmount = 100000;
    }
  }

  public trade() {
    if (this.transactionForm.valid) {
      this._progressBarService.show();
      if (this.transactionType === 'buy') {
        const totalCost =
          this.selectedCurrencyValue *
          this.transactionForm?.get('amount')?.value;
        if (totalCost <= this.accountBalance) {
          const data = {
            amount: this.transactionForm?.get('amount')?.value,
            currency: this.transactionForm?.get('currency')?.value?.key,
          };
          this._profileService
            .addCurrency(data)
            .pipe(takeWhile(() => this._alive))
            .subscribe(() => {
              const dataToSubstract = {
                amount: totalCost,
                currency: 'PLN',
              };
              this._profileService
                .substractCurrency(dataToSubstract)
                .pipe(takeWhile(() => this._alive))
                .subscribe((user: GetUserResponse) => {
                  this.accountBalance = user.asset?.find(
                    (a) => a.currency.name === 'PLN'
                  )?.amount;
                  this.user = user;
                  this.currencyAmount = user.asset.find(
                    (a) => a.currency.name == this.selectedCurrencyKey
                  ).amount;
                  this.transactionForm?.reset();
                  this.transactionForm.markAsPristine();
                  this._progressBarService.hide();
                });
            });
        } else {
          this._snackBar.open("You don't have enough cash!", 'Error', {
            duration: 5000,
          });
          this._progressBarService.hide();
        }
      } else if (this.transactionType === 'sell') {
        const totalCost =
          this.selectedCurrencyValue *
          this.transactionForm?.get('amount')?.value;

        const dataToSubstract = {
          amount: this.transactionForm?.get('amount')?.value,
          currency: this.transactionForm?.get('currency')?.value?.key,
        };

        this._profileService
          .substractCurrency(dataToSubstract)
          .pipe(takeWhile(() => this._alive))
          .subscribe((user: GetUserResponse) => {
            const data = {
              amount: totalCost,
              currency: 'PLN',
            };
            this._profileService
              .addCurrency(data)
              .pipe(takeWhile(() => this._alive))
              .subscribe(() => {
                this.accountBalance = user.asset?.find(
                  (a) => a.currency.name === 'PLN'
                )?.amount;
                this.user = user;
                this.currencyAmount = user.asset.find(
                  (a) => a.currency.name == this.selectedCurrencyKey
                ).amount;
                this.transactionForm?.reset();
                this.transactionForm.markAsPristine();
                this._progressBarService.hide();
              });
          });
      }
    } else {
      this.transactionForm?.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    this._alive = false;
  }
}
