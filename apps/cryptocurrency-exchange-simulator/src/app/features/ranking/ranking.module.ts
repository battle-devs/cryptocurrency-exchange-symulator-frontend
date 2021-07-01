import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from './ranking/ranking.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  {
    path: '',
    component: RankingComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [RankingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatTableModule,
  ],
})
export class RankingModule {}
