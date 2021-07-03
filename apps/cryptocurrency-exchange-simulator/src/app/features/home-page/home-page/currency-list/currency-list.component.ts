import { Component, Output } from '@angular/core';
import {
  cryptocurrencies,
  CryptocurrencyBlock,
} from '../../models/cryptocurrency.data';
import { CurrenciesService } from '../../../../core/services/api/currencies.service';
import { ProgressBarService } from '../../../../core/services/progress-bar.service';
import { catchError, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'inzynieria-oprogramowania-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss'],
})
export class CurrencyListComponent {
  constructor(
    private readonly _currenciesService: CurrenciesService,
    private readonly _progressBarService: ProgressBarService
  ) {
    _progressBarService.show();
  }
  public readonly now = new Date();
  public cryptocurrencies$ = this._currenciesService.getCurrenciesList().pipe(
    tap(() => this._progressBarService.hide()),
    catchError(() => {
      this._progressBarService.hide();
      return EMPTY;
    })
  );
}
