import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
];

@NgModule({
  declarations: [RegistrationComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class AuthorizationModule {}
