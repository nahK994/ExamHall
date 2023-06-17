import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.scss']
})
export class PublicPageComponent implements OnInit {

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
