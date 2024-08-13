import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

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
