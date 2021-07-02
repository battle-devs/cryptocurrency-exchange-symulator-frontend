import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResetAccountBalanceData } from '../../../features/wallet-management/models/WalletManagement';

@Injectable({
  providedIn: 'root',
})
export class WalletManagementService {
  constructor(private readonly _http: HttpClient) {}

  public resetAccountBalance(data: ResetAccountBalanceData) {
    return this._http
      .put<any>('http://localhost:8080/reset/' + data.userName, '', {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  public plnToUsd(data: any) {
    return this._http
      .put<any>('http://localhost:8080/plnToUsd/' + data.userName, '', {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  public usdToPln(data: any) {
    return this._http
      .put<any>('http://localhost:8080/usdToPln/' + data.userName, '', {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }
}
