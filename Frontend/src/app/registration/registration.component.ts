import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  registrationForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _registrationService: RegistrationService,
    private _router: Router
  ) {
    this.registrationForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  async createUser() {
    let userId = await this._registrationService.createUser(this.registrationForm.value);
    this._router.navigate(['user', userId])
  }
}
