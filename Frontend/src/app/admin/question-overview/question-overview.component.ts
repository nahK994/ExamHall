import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllQuestions } from 'src/app/user/user.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-question-overview',
  templateUrl: './question-overview.component.html',
  styleUrls: ['./question-overview.component.scss']
})
export class QuestionOverviewComponent implements OnInit {

  allSubjects: AllQuestions[] = [];

  constructor(
    private _router: Router,
    private _adminService: AdminService
  ) { }

  async ngOnInit(): Promise<void> {
    this.allSubjects = await this._adminService.getAllQuestions();
  }

  createQuestion() {
    this._router.navigate(['admin', 'create-question'])
  }

  async deleteQuestion(questionId: number) {
    await this._adminService.deleteQuestion(questionId);
  }

}
