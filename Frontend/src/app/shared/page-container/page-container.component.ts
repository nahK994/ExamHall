import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

export enum UserEnum {
  admin = 'admin',
  student = 'student'
}

@Component({
  selector: 'page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent {

  @Input('returnUrl') returnUrl:any = null;
  @Input('isLogoutAvailable') isLogoutAvailable: boolean = true;
  @Input('userType') userType: UserEnum.admin | UserEnum.student = UserEnum.student;

  userEnum = UserEnum;

  constructor(
    private _router: Router,
    private _appService: AppService
  ) { }

  goBack() {
    this._router.navigate([this.returnUrl]);
  }

  logout() {
    this._appService.logout();
  }

  goToExamOverview() {
    this._router.navigate(['admin', 'exam-overview'])
  }

  goToQuestionOverview() {
    this._router.navigate(['admin', 'question-overview'])
  }

  goToSubjectOverview() {
    this._router.navigate(['admin', 'subject-overview'])
  }

  goToQuestionBankOverview() {
    this._router.navigate(['admin', 'question-bank-overview'])
  }

  goToArchivedQuestionList() {
    this._router.navigate(['user', 'archived-question-list'])
  }

  goToExamList() {
    this._router.navigate(['user', 'exam-list'])
  }

  goToResultList() {
    this._router.navigate(['user', 'result-list'])
  }

}
