import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  constructor(private _http: HttpClient) {}

  public getCurrenciesList() {
    return this._http.get<any>('http://localhost:8080/getPrices').pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  public getCurrency(currencyCode: string) {
    return this._http
      .get<any>(`http://localhost:8080/getPrice/${currencyCode}`, {
        headers: new HttpHeaders().set('X-CW-API-Key', 'O2MKZGC55J0ZFB0O7AXN'),
      })
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }
}
