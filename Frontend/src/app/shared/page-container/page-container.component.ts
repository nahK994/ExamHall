import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

export enum UserEnum {
  admin = 'admin',
  student = 'student'
}

@Component({
  selector: 'page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent {

  @Input('returnUrl') returnUrl:any = null;
  @Input('isLogoutAvailable') isLogoutAvailable: boolean = true;
  @Input('userType') userType: UserEnum.admin | UserEnum.student = UserEnum.student;

  userEnum = UserEnum;

  constructor(
    private _router: Router,
    private _appService: AppService
  ) { }

  goBack() {
    this._router.navigate([this.returnUrl]);
  }

  logout() {
    this._appService.logout();
  }

  goToRoute(a: string, b: string) {
    this._router.navigate([a, b])
  }

}
