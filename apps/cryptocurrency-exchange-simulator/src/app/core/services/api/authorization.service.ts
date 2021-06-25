import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private readonly _http: HttpClient) {}

  public register(data: any) {
    return this._http.post(`http://localhost:8080/user`, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
