import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamListItem, ModelTestService } from './model-test.service';

@Component({
  selector: 'app-model-test',
  templateUrl: './model-test.component.html',
  styleUrls: ['./model-test.component.scss']
})
export class ModelTestComponent implements OnInit {

  constructor(
    private _activateRoute: ActivatedRoute,
    private _router: Router,
    private _modelTestService: ModelTestService
  ) { }

  examList: ExamListItem[] = [];

  async ngOnInit(): Promise<void> {
    this.examList = await this._modelTestService.getExamList();
  }

  goBack() {
    this._router.navigate(['..'], {
      relativeTo: this._activateRoute
    })
  }

  goToExam(exam: ExamListItem) {
    this._router.navigate([exam.examId], {
      relativeTo: this._activateRoute
    })
  }

}
