import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

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
