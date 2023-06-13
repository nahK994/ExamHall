import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserEnum } from 'src/app/shared/page-container/page-container.component';
import { SubjectWiseQuestions } from 'src/app/user/user.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-question-overview',
  templateUrl: './question-overview.component.html',
  styleUrls: ['./question-overview.component.scss']
})
export class QuestionOverviewComponent implements OnInit {

  allSubjects: SubjectWiseQuestions[] = [];
  userType = UserEnum;

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
