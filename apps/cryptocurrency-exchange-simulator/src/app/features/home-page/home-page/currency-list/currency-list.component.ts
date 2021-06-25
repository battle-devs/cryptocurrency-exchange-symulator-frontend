import { Component, Output } from '@angular/core';
import {
  cryptocurrencies,
  CryptocurrencyBlock,
} from '../../models/cryptocurrency.data';

@Component({
  selector: 'inzynieria-oprogramowania-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss'],
})
export class CurrencyListComponent {
  public cryptocurrencies = cryptocurrencies;
}
