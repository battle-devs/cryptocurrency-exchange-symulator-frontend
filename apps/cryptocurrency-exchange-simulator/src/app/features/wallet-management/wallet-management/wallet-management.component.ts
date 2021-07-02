import { Component } from '@angular/core';

@Component({
  selector: 'inzynieria-oprogramowania-wallet-management',
  templateUrl: './wallet-management.component.html',
  styleUrls: ['./wallet-management.component.scss'],
})
export class WalletManagementComponent {
  public links: { label: string; url: string }[] = [
    { label: 'Change currency', url: 'change-currency' },
    { label: 'Reset account balance', url: 'account-balance-reset' },
    { label: 'Buy cryptocurrencies', url: 'buying-cryptocurrencies' },
    { label: 'Sell cryptocurrencies', url: 'selling-cryptocurrencies' },
    { label: 'Check account balance', url: 'checking-account-balance' },
    {
      label: 'Check cryptocurrencies balance',
      url: 'checking-cryptocurrencies-balance',
    },
  ];
}
