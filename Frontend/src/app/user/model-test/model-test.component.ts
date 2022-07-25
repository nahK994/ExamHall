import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-model-test',
  templateUrl: './model-test.component.html',
  styleUrls: ['./model-test.component.scss']
})
export class ModelTestComponent implements OnInit {

  constructor(
    private _activateRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this._router.navigate(['..'], {
      relativeTo: this._activateRoute
    })
  }

}
