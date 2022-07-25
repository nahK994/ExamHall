import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { question } from 'src/app/shared/question/question.component';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  question: question = {
    questionText: "What is my name?",
    answer: "Khan, Shomi Khan",
    option1: "HaHa",
    option2: "HiHi",
    option3: "HoHo",
    option4: "ret",
    option5: "Haa HAHA",
    option6: "HIHI",
    explaination: "That's my name sdfjkhsdfh sifgsiug",
    topic: "topic"
  }

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
