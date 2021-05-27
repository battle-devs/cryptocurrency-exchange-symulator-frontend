import { Component, Input } from '@angular/core';
import { CryptocurrencyBlock } from '../../../models/cryptocurrency.data';

@Component({
  selector: 'inzynieria-oprogramowania-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent {
  @Input() public cryptocurrency: CryptocurrencyBlock;
}
