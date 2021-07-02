import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileService } from '../../../../core/services/api/profile.service';
import { takeWhile } from 'rxjs/operators';
import { Asset, GetUserResponse } from '../../../profile/models/profile';
import { ProgressBarService } from '../../../../core/services/progress-bar.service';

@Component({
  selector: 'inzynieria-oprogramowania-change-currency',
  templateUrl: './change-currency.component.html',
  styleUrls: ['./change-currency.component.scss'],
})
export class ChangeCurrencyComponent implements OnInit, OnDestroy {
  public user: GetUserResponse;
  public currency: string;

  private _alive = true;
  constructor(
    private readonly _profileService: ProfileService,
    private readonly _progressBarService: ProgressBarService
  ) {
    this._progressBarService.show();
  }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser() {
    const userId = JSON.parse(sessionStorage.getItem('userId'));

    this._profileService
      .getUser(userId)
      .pipe(takeWhile(() => this._alive))
      .subscribe((user) => {
        this.user = user;
        const hasPLN = user?.asset
          ?.map((a: Asset) => a?.currency?.name)
          .includes('PLN');

        const hasUSD = user?.asset
          ?.map((a: Asset) => a?.currency?.name)
          .includes('USD');

        this._progressBarService.hide();

        if (hasPLN) {
          return (this.currency = 'PLN');
        } else if (hasUSD) {
          return (this.currency = 'USD');
        }
      });
  }

  public changeCurrency() {}

  ngOnDestroy(): void {
    this._alive = false;
  }
}
