import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'inzynieria-oprogramowania-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  public banner = 'assets/';

  constructor(private _router: Router) {}

  public register() {
    this._router.navigate(['/authorization/registration']);
  }
}
