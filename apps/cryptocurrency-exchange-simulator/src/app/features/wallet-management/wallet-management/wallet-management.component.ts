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
    { label: 'Buy or sell cryptocurrencies', url: 'buying-cryptocurrencies' },
    { label: 'Check account balance', url: 'checking-account-balance' },
  ];
}
