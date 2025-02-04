import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  registrationForm: FormGroup;
  hide = true;

  constructor(
    private _fb: FormBuilder,
    private _appService: AppService,
    private _router: Router
  ) {
    this.registrationForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  async createUser() {
    await this._appService.createUser(this.registrationForm.value);
    this._router.navigate(['login']);
  }

  goBack() {
    this._router.navigate(['login']);
  }

}
