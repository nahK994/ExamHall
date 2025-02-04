import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserEnum } from 'src/app/shared/page-container/page-container.component';
import { AdminService, QuestionBank } from '../admin.service';
import { CreateQuestionComponent } from '../create-question/create-question.component';

@Component({
  selector: 'app-question-bank-details',
  templateUrl: './question-bank-details.component.html',
  styleUrls: ['./question-bank-details.component.scss']
})
export class QuestionBankDetailsComponent implements OnInit {

  questionList: QuestionBank | undefined;
  userType = UserEnum;

  constructor(
    private _adminService: AdminService,
    private _activateRoute: ActivatedRoute,
    private _dialog: MatDialog
  ) { }

  async ngOnInit(): Promise<void> {
    let id = Number(this._activateRoute.snapshot.params['id']);
    this.questionList = await this._adminService.getExamQuestions(id);
  }

  async deleteQuestion(questionId: number) {
    await this._adminService.deleteQuestion(questionId);
  }

  updateQuestion(questionId: number) {
    let dialogRef = this._dialog.open(CreateQuestionComponent, {
      data: questionId
    });

    dialogRef.afterClosed().subscribe(result => {
      let questionList = this.questionList;
      this.questionList = undefined;
      if(questionList?.questions !== undefined) {
        for(let i=0 ; i<questionList?.questions?.length; i++) {
          if(questionId === questionList.questions[i].questionId) {
            questionList.questions[i].chapterId = result;
            break
          }
        }
        this.questionList = questionList
      }
    });
  }

}
