import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {
  RegisterUserResponse,
  RegistrationForm,
} from '../../../features/authorization/models/registration';
import {
  LoginForm,
  LoginResponse,
} from '../../../features/authorization/models/login';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private readonly _http: HttpClient) {}

  public register(data: RegistrationForm) {
    return this._http
      .post<RegisterUserResponse>(`http://localhost:8080/user`, data)
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  public login(data: LoginForm) {
    console.log('login');
    return this._http
      .post<LoginResponse>(`http://localhost:8080/login`, data)
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }
}
