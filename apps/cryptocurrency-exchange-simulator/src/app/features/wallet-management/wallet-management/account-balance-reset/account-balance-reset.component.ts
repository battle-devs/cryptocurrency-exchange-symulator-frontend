import { Component, OnDestroy } from '@angular/core';
import { WalletManagementService } from '../../../../core/services/api/wallet-management.service';
import { takeWhile } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'inzynieria-oprogramowania-account-balance-reset',
  templateUrl: './account-balance-reset.component.html',
  styleUrls: ['./account-balance-reset.component.scss'],
})
export class AccountBalanceResetComponent implements OnDestroy {
  private _alive = true;

  constructor(
    private readonly _walletManagementService: WalletManagementService,
    private readonly _snackBar: MatSnackBar
  ) {}

  public resetAccountBalance() {
    const username = sessionStorage.getItem('userName');
    this._walletManagementService
      .resetAccountBalance({ userName: username })
      .pipe(takeWhile(() => this._alive))
      .subscribe(() => {
        this._snackBar.open('Your account balance has been reset!', 'Success');
      });
  }

  public ngOnDestroy(): void {
    this._alive = false;
  }
}
