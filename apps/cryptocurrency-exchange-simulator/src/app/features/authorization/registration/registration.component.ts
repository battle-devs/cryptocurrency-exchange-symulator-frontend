import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationForm } from '../models/registration';
import { FormGroupConfig } from '../../../core/services/form-group-config.type';

@Component({
  selector: 'inzynieria-oprogramowania-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup;

  constructor(private readonly _fb: FormBuilder) {}

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

  public register() {}
}
