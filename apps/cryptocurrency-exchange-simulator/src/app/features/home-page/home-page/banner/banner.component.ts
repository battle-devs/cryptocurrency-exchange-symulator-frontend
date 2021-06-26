import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../../../core/services/api/authorization.service';

@Component({
  selector: 'inzynieria-oprogramowania-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  public banner = 'assets/';

  constructor(private readonly _authorizationService: AuthorizationService) {}

  public register() {
    const data = {
      userName: 'ep1',
      user_password: 'Admin123',
      firstName: 'E',
      lastName: 'P',
      email: 'ep.test1@email.com',
      password: 'Admin123',
    };
    this._authorizationService.register(data).subscribe((x) => console.log(x));
  }
}
