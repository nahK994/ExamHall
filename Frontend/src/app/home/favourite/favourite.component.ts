import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question, Topic } from '../model-test/model-test.service';
import { FavouriteService } from './favourite.service';

export interface UserFavourite {
  name: string;
  email: string;
  questions: [];
}

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit, OnDestroy {

  questions: Question[] = [];
  allQuestions: Question[] = [];
  allTopics: Topic[] = [];

  topic: FormControl = new FormControl('')

  constructor(
    private _activateRoute: ActivatedRoute,
    private _router: Router,
    private _favouriteService: FavouriteService
  ) { }

  async ngOnInit(): Promise<void> {
    this.allQuestions = await this._favouriteService.getUserFavourites(43);
    this.allTopics = await this._favouriteService.getTopics();
    this.questions = this.allQuestions;

    this.topic.valueChanges.subscribe(res => {
      if(res === '') {
        this.questions = this.allQuestions;
        return;
      }
      let questions: Question[] = [];
      for(let question of this.allQuestions) {
        if(question.topic === res) {
          questions.push(question);
        }
      }

      this.questions = questions;
    })
  }

  goBack() {
    this._router.navigate(['..'], {
      relativeTo: this._activateRoute
    })
  }

  logout() {
    this._router.navigate(['login']);
  }

  ngOnDestroy(): void {
    
  }
}
