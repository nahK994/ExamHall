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

  goModelTests() {
    let userId = this._activatedRoute.snapshot.params['userId'];
    this._router.navigate(['model-tests', userId])
  }

  goToFavourite() {
    let userId = this._activatedRoute.snapshot.params['userId'];
    this._router.navigate(['favourites', userId])
  }

  logout() {
    this._router.navigate(['login']);
  }

}
