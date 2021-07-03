import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../../../../core/services/api/currencies.service';
import { ProfileService } from '../../../../core/services/api/profile.service';

@Component({
  selector: 'inzynieria-oprogramowania-buying-cryptocurrencies',
  templateUrl: './buying-cryptocurrencies.component.html',
  styleUrls: ['./buying-cryptocurrencies.component.scss'],
})
export class BuyingCryptocurrenciesComponent implements OnInit {
  constructor(
    private readonly _currenciesService: CurrenciesService,
    private readonly _profileService: ProfileService
  ) {}
  public currencies$ = this._currenciesService.getCurrenciesList();
  public user$ = this._profileService.getUser(
    JSON.parse(sessionStorage.getItem('userId'))
  );

  ngOnInit(): void {}
}
