import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserEnum } from 'src/app/shared/page-container/page-container.component';
import { SubjectWiseQuestions } from 'src/app/user/user.service';
import { AdminService } from '../admin.service';
import { CreateQuestionComponent } from '../create-question/create-question.component';

@Component({
  selector: 'app-question-overview',
  templateUrl: './question-overview.component.html',
  styleUrls: ['./question-overview.component.scss']
})
export class QuestionOverviewComponent implements OnInit {

  allSubjects: SubjectWiseQuestions[] = [];
  userType = UserEnum;

  constructor(
    private _adminService: AdminService,
    private _dialog: MatDialog
  ) { }

  async ngOnInit(): Promise<void> {
    this.allSubjects = await this._adminService.getAllQuestions();
  }

  createQuestion() {
    this._dialog.open(CreateQuestionComponent, {
      data: undefined
    })
  }

  async deleteQuestion(questionId: number) {
    await this._adminService.deleteQuestion(questionId);
  }

}
