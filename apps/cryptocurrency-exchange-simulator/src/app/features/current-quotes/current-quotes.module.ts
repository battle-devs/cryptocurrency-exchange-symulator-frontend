import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentQuotesComponent } from './current-quotes/current-quotes.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import {
  LineChartModule,
  RealtimeChartModule,
  PieChartModule,
} from 'ngx-graph';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CurrentQuotesComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [CurrentQuotesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    LineChartModule,
    RealtimeChartModule,
    PieChartModule,
    FormsModule,
  ],
})
export class CurrentQuotesModule {}
