import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
