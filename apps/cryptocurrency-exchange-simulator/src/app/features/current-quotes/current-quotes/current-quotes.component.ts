import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../../../core/services/api/currencies.service';
import { BehaviorSubject, EMPTY, interval, timer, zip } from 'rxjs';
import { io } from 'socket.io-client';

import {
  catchError,
  map,
  scan,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { RealtimeChartOptions } from 'ngx-graph';

@Component({
  selector: 'inzynieria-oprogramowania-current-quotes',
  templateUrl: './current-quotes.component.html',
  styleUrls: ['./current-quotes.component.scss'],
})
export class CurrentQuotesComponent {
  constructor(private readonly _currenciesService: CurrenciesService) {}
  public max = 5;
  private prev = 0;

  public selectedCurrencySubject = new BehaviorSubject<string>('btcpln');
  public availableCurrencies = [
    { name: 'Bitcoin', value: 'btcpln' },
    { name: 'Doge', value: 'dogepln' },
    { name: 'Polkadot', value: 'dotpln' },
    { name: 'Etherum', value: 'ethpln' },
    { name: 'Lisk', value: 'lskpln' },
    { name: 'Litecoin', value: 'ltcpln' },
    { name: 'Polygon', value: 'maticpln' },
    { name: 'Sushi', value: 'sushipln' },
  ];
  public data$ = this.selectedCurrencySubject.asObservable().pipe(
    switchMap(() =>
      interval(5000).pipe(
        switchMap(() =>
          this._currenciesService
            .getCurrency(this.selectedCurrencySubject.value)
            .pipe(
              catchError(() => EMPTY),
              map((x) => [{ date: new Date(), value: x }])
            )
        ),
        scan((acc, val) => [...acc, ...val]),
        tap((value) => {
          const maxValue = Math.max(...value.map((x) => x.value));
          this.max = maxValue * 1.1;
          const latest = value[value.length - 1].value;
          if (latest !== this.prev)
            this.realtimeChartOptions = {
              ...this.realtimeChartOptions,
              yGrid: {
                ...this.realtimeChartOptions.yGrid,
                max: this.max,
                min: 0.8 * this.max,
              },
            };
          this.prev = latest;
        })
      )
    )
  );

  realtimeChartOptions: RealtimeChartOptions = {
    height: 550,
    margin: { left: 40 },
    lines: [
      {
        color: '#fdf100',
        lineWidth: 3,
        area: true,
        areaColor: '#fdf100',
        areaOpacity: 0.2,
      },
    ],
    xGrid: { tickPadding: 15, tickNumber: 5 },
    yGrid: {
      min: 0,
      max: this.max,
      tickNumber: 5,
      tickFormat: (v: number) => `${v}`,
      tickPadding: 25,
    },
  };
}
