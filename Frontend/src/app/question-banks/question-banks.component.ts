import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService, QuestionBank } from '../admin/admin.service';
import { QuestionBanksService } from './question-banks.service';

@Component({
  selector: 'app-question-banks',
  templateUrl: './question-banks.component.html',
  styleUrls: ['./question-banks.component.scss']
})
export class QuestionBanksComponent implements OnInit {

  questionBanks: QuestionBank[] = [];

  constructor(
    private _questionbanksservice: QuestionBanksService,
    private _router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.questionBanks = await this._questionbanksservice.getQuestionBanks();
  }

  goToQuestionBankDetails(id: number){
    this._router.navigate(['question-banks', id])
  }

  login() {
    this._router.navigate(['login'])
  }

  goBack() {
    this._router.navigate([''])
  }

}
