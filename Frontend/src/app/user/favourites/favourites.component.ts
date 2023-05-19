import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Question, Subject, UserService } from '../user.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  questions: Question[] = [];
  userArchivedQuestions!: Question[];
  allSubjects: Subject[] = [];

  subject: FormControl = new FormControl('')
  userId!: number

  constructor(
    private _userService: UserService
  ) { }

  async ngOnInit(): Promise<void> {
    this.allSubjects = await this._userService.getUserFavourites();
    let questions = []
    for(let subject of this.allSubjects) {
      for(let question of subject.questions) {
        questions.push(question);
      }
    }
    this.userArchivedQuestions = questions;
    this.questions = questions;

    this.subject.valueChanges.subscribe(res => {
      if(res === '') {
        this.questions = this.userArchivedQuestions;
        return;
      }
      let questions: Question[] = [];
      for(let question of this.userArchivedQuestions) {
        if(question.subject === res) {
          questions.push(question);
        }
      }

      this.questions = questions;
    })
  }

  async deleteFromArchive(question: Question) {
    await this._userService.deleteQuestionFromArchive(question.questionId);

    const index = this.questions.indexOf(question);
    if(index > -1) {
        this.questions.splice(index, 1);
    }
  }

}
