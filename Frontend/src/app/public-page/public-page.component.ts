import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.scss']
})
export class PublicPageComponent {

  constructor(
    private _router: Router,
  ) { }

  login() {
    this._router.navigate(['login'])
  }

  goToJobSolutions() {
    this._router.navigate(['job-solutions'])
  }

  goToQuestionBanks() {
    this._router.navigate(['question-banks'])
  }

}
