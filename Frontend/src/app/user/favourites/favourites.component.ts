import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question, Topic, UserArchivedQuestionList, UserService } from '../user.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  questions: Question[] = [];
  userArchivedQuestions!: UserArchivedQuestionList;
  allTopics: Topic[] = [];

  topic: FormControl = new FormControl('')
  userId!: number

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) { }

  async ngOnInit(): Promise<void> {
    this.userId = this._activatedRoute.snapshot.params['userId'];
    this.userArchivedQuestions = await this._userService.getUserFavourites(this.userId);
    this.allTopics = await this._userService.getTopics();
    this.questions = this.userArchivedQuestions.questions;

    this.topic.valueChanges.subscribe(res => {
      if(res === '') {
        this.questions = this.userArchivedQuestions.questions;
        return;
      }
      let questions: Question[] = [];
      for(let question of this.userArchivedQuestions.questions) {
        if(question.topic === res) {
          questions.push(question);
        }
      }

      this.questions = questions;
    })
  }

  goBack() {
    this._router.navigate(['home', this.userId])
  }

  logout() {
    this._router.navigate(['login']);
  }

  ngOnDestroy(): void {
    
  }

}
