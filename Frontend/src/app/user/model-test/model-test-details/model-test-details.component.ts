import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultItem } from 'src/app/shared/question-paper/question-paper.component';
import { Exam, Result } from '../../user.service';
import { ModelTestService } from '../model-test.service';

export interface AnswerSheet {
  answerSheet: ResultItem[]
}

@Component({
  selector: 'app-model-test-details',
  templateUrl: './model-test-details.component.html',
  styleUrls: ['./model-test-details.component.scss']
})
export class ModelTestDetailsComponent implements OnInit {

  exam: Exam | undefined;
  result: Result | undefined;
  userId !: number;
  examId !: number

  constructor(
    private _activateRoute: ActivatedRoute,
    private _router: Router,
    private _modelTestService: ModelTestService
  ) { }

  async ngOnInit(): Promise<void> {
    this.examId = this._activateRoute.snapshot.params['examId'];
    this.userId = this._activateRoute.snapshot.params['userId'];
    this.result = await this._modelTestService.getResult(this.examId, this.userId);
    if(!this.result) {
      this.exam = await this._modelTestService.getExam(this.examId);
    }
  }

  goBack() {
    this._router.navigate(['model-tests', this.userId])
  }

  logout() {
    this._router.navigate(['login']);
  }

  async submitAnswer(answerSheet: AnswerSheet) {
    console.log("final ==> ", answerSheet)
    await this._modelTestService.createResult(answerSheet, this.examId, this.userId);
  }

}
