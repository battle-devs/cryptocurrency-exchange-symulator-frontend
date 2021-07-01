import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from './ranking/ranking.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RankingComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [RankingComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RankingModule {}
