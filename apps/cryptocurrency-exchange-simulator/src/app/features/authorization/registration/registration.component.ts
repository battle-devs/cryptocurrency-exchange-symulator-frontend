import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'inzynieria-oprogramowania-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  constructor(private readonly _fb: FormBuilder) {}

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm = () => {
    const config: FormGroupConfig;
  };
}
