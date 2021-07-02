import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationForm } from '../models/registration';
import { FormGroupConfig } from '../../../core/services/form-group-config.type';
import { AuthorizationService } from '../../../core/services/api/authorization.service';
import { takeWhile } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProgressBarService } from '../../../core/services/progress-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'inzynieria-oprogramowania-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit, OnDestroy {
  public registrationForm: FormGroup;
  private _alive = true;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _authorizationService: AuthorizationService,
    private readonly _snackBar: MatSnackBar,
    private readonly _progressBarService: ProgressBarService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm = () => {
    const config: FormGroupConfig<RegistrationForm> = {
      firstName: [
        '',
        [
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(3),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(3),
        ],
      ],
      userName: [
        '',
        [
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(3),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(3),
          Validators.email,
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(3),
          Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
        ],
      ],
      user_password: ['', []],
    };

    this.registrationForm = this._fb.group(config);
  };

  public register() {
    if (this.registrationForm.valid) {
      this._progressBarService.show();
      const data: RegistrationForm = {
        email: this.registrationForm?.get('email')?.value,
        firstName: this.registrationForm?.get('firstName')?.value,
        lastName: this.registrationForm?.get('lastName')?.value,
        password: this.registrationForm?.get('password')?.value,
        userName: this.registrationForm?.get('userName')?.value,
        user_password: this.registrationForm?.get('password')?.value,
      };
      this._authorizationService
        .register(data)
        .pipe(takeWhile(() => this._alive))
        .subscribe(() => {
          this._snackBar.open('User created correctly!', 'Success', {
            duration: 5000,
          });
          this._progressBarService.hide();
          this._router.navigateByUrl('/authorization/login');
        });
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }

  public ngOnDestroy() {
    this._alive = false;
  }
}
