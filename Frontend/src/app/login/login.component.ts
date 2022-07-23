import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  canDisplayRoleForm: boolean = false;

  constructor(
    private _fb: FormBuilder
  ) {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role:['']
    })
  }

  setRole(role: string) {
    this.loginForm.get('role')?.setValue(role);
  }

  checkCredential() {
    if(this.loginForm.get('email')?.valid && this.loginForm.get('password')?.valid) {
      this.canDisplayRoleForm = true;
    }
  }

}
