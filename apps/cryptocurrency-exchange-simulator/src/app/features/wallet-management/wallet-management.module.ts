import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletManagementComponent } from './wallet-management/wallet-management.component';
import { ChangeCurrencyComponent } from './wallet-management/change-currency/change-currency.component';
import { AccountBalanceResetComponent } from './wallet-management/account-balance-reset/account-balance-reset.component';
import { BuyingCryptocurrenciesComponent } from './wallet-management/buying-cryptocurrencies/buying-cryptocurrencies.component';
import { CheckingAccountBalanceComponent } from './wallet-management/checking-account-balance/checking-account-balance.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { CurrencyComponent } from './wallet-management/checking-account-balance/currency/currency.component';

const routes: Routes = [
  {
    path: '',
    component: WalletManagementComponent,
    children: [
      {
        path: 'change-currency',
        component: ChangeCurrencyComponent,
      },
      {
        path: 'account-balance-reset',
        component: AccountBalanceResetComponent,
      },
      {
        path: 'buying-cryptocurrencies',
        component: BuyingCryptocurrenciesComponent,
      },
      {
        path: 'checking-account-balance',
        component: CheckingAccountBalanceComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    WalletManagementComponent,
    ChangeCurrencyComponent,
    AccountBalanceResetComponent,
    BuyingCryptocurrenciesComponent,
    CheckingAccountBalanceComponent,
    CurrencyComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatTabsModule,
  ],
})
export class WalletManagementModule {}
