import { Component } from '@angular/core';

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
  displayedColumns: string[] = ['position', 'name', 'value'];
  dataSource = ELEMENT_DATA;
}
