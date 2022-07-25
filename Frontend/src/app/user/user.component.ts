import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private _activateRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

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

}
