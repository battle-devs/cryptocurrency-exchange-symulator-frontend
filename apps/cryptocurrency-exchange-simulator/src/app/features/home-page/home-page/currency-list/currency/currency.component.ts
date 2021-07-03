import { Component, Input } from '@angular/core';
import { CryptocurrencyBlock } from '../../../models/cryptocurrency.data';

@Component({
  selector: 'inzynieria-oprogramowania-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent {
  @Input() public cryptocurrency: { key: string; value: number };
}
