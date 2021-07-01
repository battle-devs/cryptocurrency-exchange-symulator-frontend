import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { AuthorizationService } from './services/api/authorization.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, withLatestFrom } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private readonly _authService: AuthorizationService,
    private readonly _router: Router
  ) {}

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authHelper = new JwtHelperService();
    if (
      this._authService.getToken() &&
      !authHelper.isTokenExpired(
        this._authService?.getToken()?.replace('Bearer ', '')
      )
    )
      request = request.clone({
        setHeaders: {
          Authorization: this._authService.getToken(),
        },
      });

    return next.handle(request);
  }
}
