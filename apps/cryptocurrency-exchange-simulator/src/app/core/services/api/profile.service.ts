import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { GetUserResponse } from '../../../features/profile/models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private readonly _http: HttpClient) {}

  public getUser(userId: number) {
    return this._http
      .get<GetUserResponse>('http://localhost:8080/user/' + userId)
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  public addCurrency(data: any) {
    const userName = sessionStorage.getItem('userName');

    return this._http
      .post<any>(
        `http://localhost:8080/addAsset/${userName}/${data?.amount}`,
        {
          name: data?.currency,
          dateOfPurchase: Date.now(),
          id: 1,
        },

        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        }
      )
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  public substractCurrency(data: any) {
    const userName = sessionStorage.getItem('userName');

    return this._http
      .post<any>(
        `http://localhost:8080/substractAsset/${userName}/${data?.amount}`,
        {
          name: data?.currency,
          dateOfPurchase: Date.now(),
          id: 1,
        },

        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        }
      )
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }
}
