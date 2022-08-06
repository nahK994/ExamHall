import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private _activateRoute: ActivatedRoute,
    private _router: Router
  ) { }

  goModelTests() {
    this._router.navigate(['model-tests'], {
      relativeTo: this._activateRoute
    })
  }

  goToFavourite() {
    this._router.navigate(['favourites'], {
      relativeTo: this._activateRoute
    })
  }

  logout() {
    this._router.navigate(['login']);
  }

}
