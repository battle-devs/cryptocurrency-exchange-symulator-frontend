import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileService } from '../../../../core/services/api/profile.service';
import { takeWhile } from 'rxjs/operators';
import { Asset, GetUserResponse } from '../../../profile/models/profile';
import { ProgressBarService } from '../../../../core/services/progress-bar.service';
import { WalletManagementService } from '../../../../core/services/api/wallet-management.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'inzynieria-oprogramowania-change-currency',
  templateUrl: './change-currency.component.html',
  styleUrls: ['./change-currency.component.scss'],
})
export class ChangeCurrencyComponent implements OnInit, OnDestroy {
  public currency: string;

  private _alive = true;
  constructor(
    private readonly _profileService: ProfileService,
    private readonly _progressBarService: ProgressBarService,
    private readonly _walletManagementService: WalletManagementService,
    private readonly _snackBar: MatSnackBar
  ) {
    this._progressBarService.show();
  }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser() {
    const userId = JSON.parse(sessionStorage.getItem('userId'));

    this._profileService
      .getUser(userId)
      .pipe(takeWhile(() => this._alive))
      .subscribe((user) => {
        const hasPLN = user?.asset
          ?.map((a: Asset) => a?.currency?.name)
          .includes('PLN');

        const hasUSD = user?.asset
          ?.map((a: Asset) => a?.currency?.name)
          .includes('USD');

        this._progressBarService.hide();

        if (hasPLN) {
          return (this.currency = 'PLN');
        } else if (hasUSD) {
          return (this.currency = 'USD');
        }
      });
  }

  public changeCurrency() {
    const username = sessionStorage.getItem('userName');

    if (this.currency === 'PLN') {
      this._walletManagementService
        .plnToUsd({ userName: username })
        .pipe(takeWhile(() => this._alive))
        .subscribe(() => {
          this._snackBar.open('Currency changed!', 'Success', {
            duration: 5000,
          });
        });
    } else if (this.currency === 'USD') {
      this._walletManagementService
        .usdToPln({ userName: username })
        .pipe(takeWhile(() => this._alive))
        .subscribe(() => {
          this._snackBar.open('Currency changed!', 'Success', {
            duration: 5000,
          });
        });
    }
  }

  ngOnDestroy(): void {
    this._alive = false;
  }
}
