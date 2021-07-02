import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MainMenuComponent } from './components/menu/main-menu/main-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    TranslateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatListModule,
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MenuComponent,
    TranslateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatListModule,
  ],
  declarations: [MainMenuComponent, MenuComponent, MenuComponent],
})
export class SharedModule {}
