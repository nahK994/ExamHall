import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private _router: Router
  ) { }

  goModelTests() {
    this._router.navigate(['model-tests'])
  }

  goToFavourite() {
    this._router.navigate(['favourites'])
  }

}
