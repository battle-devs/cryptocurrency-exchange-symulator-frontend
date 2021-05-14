import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { BannerComponent } from './home-page/banner/banner.component';
import { CurrencyListComponent } from './home-page/currency-list/currency-list.component';
import { CurrencyComponent } from './home-page/currency-list/currency/currency.component';

@NgModule({
  declarations: [
    HomePageComponent,
    BannerComponent,
    CurrencyListComponent,
    CurrencyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomePageModule { }
