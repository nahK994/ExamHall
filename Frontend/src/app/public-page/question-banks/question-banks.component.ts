import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionBank } from 'src/app/admin/admin.service';
import { PublicPageService } from '../public-page.service';


@Component({
  selector: 'app-question-banks',
  templateUrl: './question-banks.component.html',
  styleUrls: ['./question-banks.component.scss']
})
export class QuestionBanksComponent implements OnInit {

  questionBanks: QuestionBank[] = [];
  bcsQuestionBanks: QuestionBank[] = [];
  primarySchoolQuestionBanks: QuestionBank[] = [];

  constructor(
    private _publicPageService: PublicPageService,
    private _router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.questionBanks = await this._publicPageService.getQuestionBanks();
    for(let i=0 ; i<this.questionBanks.length ; i++) {
      if(this.questionBanks[i].category == 'BCS') {
        this.bcsQuestionBanks.push(this.questionBanks[i]);
      }
      else {
        this.primarySchoolQuestionBanks.push(this.questionBanks[i]);
      }
    }
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
