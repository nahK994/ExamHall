import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { UserLoginInfo, UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  hide = true;

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _router: Router,
    private _appService: AppService
  ) {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  async login() {
    let userInfo: UserLoginInfo = await this._userService.loginUser(this.loginForm.value);
    this._appService.setAssets(userInfo.refresh, userInfo.access);

    if(userInfo.isAdmin) {
      this._router.navigate(['admin']);
    }
    else {
      this._router.navigate(['home']);
    }
  }

  registration() {
    this._router.navigate(['registration']);
  }

}
