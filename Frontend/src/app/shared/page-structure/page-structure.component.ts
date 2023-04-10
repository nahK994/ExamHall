import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'page-structure',
  templateUrl: './page-structure.component.html',
  styleUrls: ['./page-structure.component.scss']
})
export class PageStructureComponent {

  @Input('returnUrl') returnUrl:any = null;

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
