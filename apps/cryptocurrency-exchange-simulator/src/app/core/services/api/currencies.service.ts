import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  public getCurrency() {
    return this._http.get<any>('http://localhost:8080/getPrice/btcpln').pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
