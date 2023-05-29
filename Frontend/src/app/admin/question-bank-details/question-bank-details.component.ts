import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService, QuestionBank } from '../admin.service';

@Component({
  selector: 'app-question-bank-details',
  templateUrl: './question-bank-details.component.html',
  styleUrls: ['./question-bank-details.component.scss']
})
export class QuestionBankDetailsComponent implements OnInit {

  questionList: QuestionBank | undefined;

  constructor(
    private _adminService: AdminService,
    private _activateRoute: ActivatedRoute,
    private _router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    let id = Number(this._activateRoute.snapshot.params['id']);
    this.questionList = await this._adminService.getExamQuestions(id);
  }

  async deleteQuestion(questionId: number) {
    await this._adminService.deleteQuestion(questionId);
  }

  updateQuestion(questionId: number) {
    this._router.navigate(['admin', 'update-question', questionId])
  }

}
