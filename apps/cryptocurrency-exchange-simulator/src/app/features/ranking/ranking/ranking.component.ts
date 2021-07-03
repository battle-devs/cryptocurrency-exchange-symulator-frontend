import { Component } from '@angular/core';
import { CurrenciesService } from '../../../core/services/api/currencies.service';
import { catchError, map, tap } from 'rxjs/operators';
import { ProgressBarService } from '../../../core/services/progress-bar.service';
import { EMPTY } from 'rxjs';

export interface TableData {
  position: number;
  name: string;
  value: number;
}

const ELEMENT_DATA: TableData[] = [
  { position: 1, name: 'Hydrogen', value: 1.0079 },
  { position: 2, name: 'Helium', value: 4.0026 },
  { position: 3, name: 'Lithium', value: 6.94 },
  { position: 4, name: 'Beryllium', value: 9.0122 },
  { position: 5, name: 'Boron', value: 10.811 },
  { position: 6, name: 'Carbon', value: 12.0107 },
  { position: 7, name: 'Nitrogen', value: 14.0067 },
  { position: 8, name: 'Oxygen', value: 15.9994 },
];

@Component({
  selector: 'inzynieria-oprogramowania-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent {
  constructor(
    private readonly _currenciesService: CurrenciesService,
    private readonly _progressBarService: ProgressBarService
  ) {
    _progressBarService.show();
  }
  displayedColumns: string[] = ['position', 'name', 'value'];
  dataSource = this._currenciesService.getCurrenciesList().pipe(
    tap(() => this._progressBarService.hide()),
    catchError(() => {
      this._progressBarService.hide();
      return EMPTY;
    }),
    map((data) =>
      Object.keys(data)
        .reverse()
        .map((key, index) => ({
          position: index + 1,
          name: key,
          value: data[key],
        }))
    )
  );
}
