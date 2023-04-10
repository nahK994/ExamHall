import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ExamHall';

  constructor(
    private _appService: AppService
  ) { }

  ngOnInit(): void {
    let count = 1;
    setInterval(async () => {
      if (localStorage.getItem(this._appService.refreshToken) !== "undefined" && localStorage.getItem(this._appService.refreshToken) !== null) {
        await this._appService.refreshAccessToken();
      }
      count++;
    }, 54000);
  }
}
