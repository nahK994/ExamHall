import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultItem } from 'src/app/shared/question-paper/question-paper.component';
import { Exam, Result } from '../model-test.service';
import { ModelTestDetailsService } from './model-test-details.service';

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

  constructor(
    private _activateRoute: ActivatedRoute,
    private _router: Router,
    private _modelTestDetailsService: ModelTestDetailsService
  ) { }

  async ngOnInit(): Promise<void> {
    let examId = this._activateRoute.snapshot.params['examId'];
    let userId = this._activateRoute.snapshot.params['userId'];
    this.result = await this._modelTestDetailsService.getResult(examId, userId);
    if(!this.result) {
      this.exam = await this._modelTestDetailsService.getExam(examId);
    }
  }

  goBack() {
    this._router.navigate(['..'], {
      relativeTo: this._activateRoute
    })
  }

  logout() {
    this._router.navigate(['login']);
  }

  async submitAnswer(answerSheet: AnswerSheet) {
    console.log("final ==> ", answerSheet)
    let examId = this._activateRoute.snapshot.params['examId'];
    let userId = this._activateRoute.snapshot.params['userId'];
    await this._modelTestDetailsService.createResult(answerSheet, examId, userId);
  }

}
