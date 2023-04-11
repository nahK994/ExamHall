import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent {

  @Input('returnUrl') returnUrl:any = null;
  @Input('isLogoutAvailable') isLogoutAvailable: boolean = true;

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

}
