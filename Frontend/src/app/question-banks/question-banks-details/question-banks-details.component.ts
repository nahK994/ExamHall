import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService, QuestionBank } from 'src/app/admin/admin.service';
import { QuestionBanksService } from '../question-banks.service';

@Component({
  selector: 'app-question-banks-details',
  templateUrl: './question-banks-details.component.html',
  styleUrls: ['./question-banks-details.component.scss']
})
export class QuestionBanksDetailsComponent implements OnInit {

  questionList: QuestionBank | undefined;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _questionbanksservice: QuestionBanksService,
    private _router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    let id = Number(this._activateRoute.snapshot.params['id']);
    this.questionList = await this._questionbanksservice.getExamQuestions(id);
  }

  login() {
    this._router.navigate(['login'])
  }

  goBack() {
    this._router.navigate(['question-banks'])
  }

}
