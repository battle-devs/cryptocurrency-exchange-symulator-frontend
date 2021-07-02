import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from '../../../core/services/api/authorization.service';
import { FormGroupConfig } from '../../../core/services/form-group-config.type';
import { LoginForm } from '../models/login';
import { takeWhile } from 'rxjs/operators';
import { ProgressBarService } from '../../../core/services/progress-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'inzynieria-oprogramowania-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  private _alive = true;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _authorizationService: AuthorizationService,
    private readonly _progressBarService: ProgressBarService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm = () => {
    const config: FormGroupConfig<LoginForm> = {
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    };

    this.loginForm = this._fb.group(config);
  };

  public login() {
    if (this.loginForm.valid) {
      this._progressBarService.show();
      this._authorizationService
        .login(this.loginForm?.value)
        .pipe(takeWhile(() => this._alive))
        .subscribe(
          (user) => {
            sessionStorage.setItem(
              'userName',
              this.loginForm?.get('username')?.value
            );
            sessionStorage.setItem('userId', JSON.stringify(user.id));
            this._progressBarService.hide();
            this._router.navigateByUrl('/home');
          },
          () => {
            this._progressBarService.hide();
          }
        );
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  public ngOnDestroy() {
    this._alive = false;
  }
}
