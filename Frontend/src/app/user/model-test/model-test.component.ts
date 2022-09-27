import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamListItem } from '../user.service';
import { ModelTestService } from './model-test.service';

@Component({
  selector: 'app-model-test',
  templateUrl: './model-test.component.html',
  styleUrls: ['./model-test.component.scss']
})
export class ModelTestComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _modelTestService: ModelTestService
  ) { }

  examList: ExamListItem[] = [];

  async ngOnInit(): Promise<void> {
    this.examList = await this._modelTestService.getExamList();
  }

  goBack() {
    let userId = this._activatedRoute.snapshot.params['userId'];
    this._router.navigate(['home', userId])
  }

  goToExam(exam: ExamListItem) {
    this._router.navigate(['exam', exam.examId], {
      relativeTo: this._activatedRoute
    })
  }

  logout() {
    this._router.navigate(['login']);
  }

}
