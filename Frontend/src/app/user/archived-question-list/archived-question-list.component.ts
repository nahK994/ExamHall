import { Component, OnInit } from '@angular/core';
import { SubjectWiseQuestions, UserService } from '../user.service';

@Component({
  selector: 'app-archived-question-list',
  templateUrl: './archived-question-list.component.html',
  styleUrls: ['./archived-question-list.component.scss']
})
export class ArchivedQuestionListComponent implements OnInit {

  allSubjects: SubjectWiseQuestions[] = [];

  constructor(
    private _userService: UserService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.allSubjects = await this._userService.getUserFavourites();
  }

  async deleteFromArchive(questionId: number) {
    await this._userService.deleteQuestionFromArchive(questionId);
  }
}
