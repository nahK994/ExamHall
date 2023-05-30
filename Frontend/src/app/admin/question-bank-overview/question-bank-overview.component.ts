import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserEnum } from 'src/app/shared/page-container/page-container.component';
import { AdminService, QuestionBank } from '../admin.service';

@Component({
  selector: 'app-question-bank-overview',
  templateUrl: './question-bank-overview.component.html',
  styleUrls: ['./question-bank-overview.component.scss']
})
export class QuestionBankOverviewComponent implements OnInit {

  questionBanks: QuestionBank[] = [];
  userType = UserEnum;

  constructor(
    private _router: Router,
    private _adminService: AdminService
  ) { }

  async ngOnInit(): Promise<void> {
    this.questionBanks = await this._adminService.getQuestionBanks();
  }

  goToQuestionBank(id: number) {
    this._router.navigate(['admin', 'question-bank', id])
  }

}
