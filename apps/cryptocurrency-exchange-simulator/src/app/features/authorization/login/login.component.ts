import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from '../../../core/services/api/authorization.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroupConfig } from '../../../core/services/form-group-config.type';
import { LoginForm, RegistrationForm } from '../models/registration';
import { takeWhile } from 'rxjs/operators';

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
    private readonly _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm = () => {
    const config: FormGroupConfig<LoginForm> = {
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    };

    this.loginForm = this._fb.group(config);
  };

  public login() {
    if (this.loginForm.valid) {
      this._authorizationService
        .register(this.loginForm?.value)
        .pipe(takeWhile(() => this._alive))
        .subscribe(() => {
          console.log();
        });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  public ngOnDestroy() {
    this._alive = false;
  }
}
