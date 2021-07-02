import { Component, Input } from '@angular/core';
import { Asset } from '../../../../profile/models/profile';

@Component({
  selector: 'inzynieria-oprogramowania-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent {
  @Input() public asset: Asset;
}
