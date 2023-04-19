import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ResultItem } from 'src/app/shared/exam-paper/exam-paper.component';
import { RankListDialogComponent } from 'src/app/shared/rank-list-dialog/rank-list-dialog.component';
import { Exam, Result } from '../../user.service';
import { ModelTestService } from '../model-test.service';

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
  result !: Result;
  userId !: number;
  examId !: number

  constructor(
    private _activateRoute: ActivatedRoute,
    private _modelTestService: ModelTestService,
    private _dialog: MatDialog
  ) { }

  async ngOnInit(): Promise<void> {
    this.examId = Number(this._activateRoute.snapshot.params['examId']);
    this.result = await this._modelTestService.getResult(this.examId);
    this.exam = await this._modelTestService.getExam(this.examId);
  }

  async submitAnswer(answerSheet: AnswerSheet) {
    answerSheet.examId = this.examId;
    await this._modelTestService.createResult(answerSheet);
  }

  seeRankList() {
    this._dialog.open(RankListDialogComponent, {
      data: this.result.rankList
    })
  }

}
