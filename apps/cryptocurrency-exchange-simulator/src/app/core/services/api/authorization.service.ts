import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
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

  private readonly tokenSubject = new BehaviorSubject<string>(
    localStorage.getItem('access_token')
  );

  public token$ = this.tokenSubject.asObservable();

  public getToken() {
    return this.tokenSubject.value;
  }
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
    return this._http
      .post<LoginResponse>(`http://localhost:8080/login`, data)
      .pipe(
        tap((res) => {
          this.tokenSubject.next(res.token);
          localStorage.setItem('access_token', res.token);
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }
}
