import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultItem } from 'src/app/shared/exam-paper/exam-paper.component';
import { RankListDialogComponent } from 'src/app/shared/rank-list-dialog/rank-list-dialog.component';
import { Exam, Result, UserService } from '../user.service';


export interface AnswerSheet {
  answerSheet: ResultItem[],
  examId?: number
}

@Component({
  selector: 'app-model-test-details',
  templateUrl: './model-test-details.component.html',
  styleUrls: ['./model-test-details.component.scss']
})
export class ModelTestDetailsComponent implements OnInit {

  exam !: Exam;
  examId !: number

  constructor(
    private _activateRoute: ActivatedRoute,
    private _userService: UserService,
    private _router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.examId = Number(this._activateRoute.snapshot.params['examId']);
    this.exam = await this._userService.getExam(this.examId);
  }

  async submitAnswer(answerSheet: AnswerSheet) {
    answerSheet.examId = this.examId;
    await this._userService.endExam(this.examId, answerSheet);
    this._router.navigate(['user']);
  }

  async startExam() {
    await this._userService.startExam(this.examId);
  }

}
