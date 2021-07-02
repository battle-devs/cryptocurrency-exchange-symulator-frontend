import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileService } from '../../../../core/services/api/profile.service';
import { ProgressBarService } from '../../../../core/services/progress-bar.service';
import { takeWhile } from 'rxjs/operators';
import { Asset } from '../../../profile/models/profile';

@Component({
  selector: 'inzynieria-oprogramowania-checking-account-balance',
  templateUrl: './checking-account-balance.component.html',
  styleUrls: ['./checking-account-balance.component.scss'],
})
export class CheckingAccountBalanceComponent implements OnInit, OnDestroy {
  public currencies: Asset[];

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
        this.currencies = user.asset;
        this._progressBarService.hide();
      });
  }

  ngOnDestroy(): void {
    this._alive = false;
  }
}
