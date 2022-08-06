import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  createExam() {
    this._router.navigate(['create-exam'], {
      relativeTo: this._activatedRoute
    });
  }

  logout() {
    this._router.navigate(['admin']);
  }

}
