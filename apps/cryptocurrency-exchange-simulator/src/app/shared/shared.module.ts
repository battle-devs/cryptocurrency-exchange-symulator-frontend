import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  exports: [CommonModule, MatButtonModule],
})
export class SharedModule {}
