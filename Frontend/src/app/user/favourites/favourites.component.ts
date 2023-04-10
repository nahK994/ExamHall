import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Question, Topic, UserService } from '../user.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  questions: Question[] = [];
  userArchivedQuestions!: Question[];
  allTopics: Topic[] = [];

  topic: FormControl = new FormControl('')
  userId!: number

  constructor(
    private _userService: UserService
  ) { }

  async ngOnInit(): Promise<void> {
    this.userArchivedQuestions = await this._userService.getUserFavourites();
    this.allTopics = await this._userService.getTopics();
    this.questions = this.userArchivedQuestions;
    console.log(this.userArchivedQuestions)

    this.topic.valueChanges.subscribe(res => {
      if(res === '') {
        this.questions = this.userArchivedQuestions;
        return;
      }
      let questions: Question[] = [];
      for(let question of this.userArchivedQuestions) {
        if(question.topicId === res) {
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
