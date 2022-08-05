import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _loginService: LoginService,
    private _router: Router
  ) {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  setRole(role: string) {
    this.loginForm.get('role')?.setValue(role);
  }

  async login() {
    let userId = await this._loginService.loginUser(this.loginForm.value);
    this._router.navigate(['user', userId])
  }

  registration() {
    this._router.navigate(['registration']);
  }

}
