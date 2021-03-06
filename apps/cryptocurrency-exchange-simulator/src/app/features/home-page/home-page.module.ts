import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { BannerComponent } from './home-page/banner/banner.component';
import { CurrencyListComponent } from './home-page/currency-list/currency-list.component';
import { CurrencyComponent } from './home-page/currency-list/currency/currency.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    HomePageComponent,
    BannerComponent,
    CurrencyListComponent,
    CurrencyComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class HomePageModule {}
