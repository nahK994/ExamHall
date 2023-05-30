import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserEnum } from 'src/app/shared/page-container/page-container.component';
import { AdminService, ExamList } from '../admin.service';

@Component({
  selector: 'app-exam-overview',
  templateUrl: './exam-overview.component.html',
  styleUrls: ['./exam-overview.component.scss']
})
export class ExamOverviewComponent implements OnInit {

  examList!: ExamList[];
  userType = UserEnum

  constructor(
    private _router: Router,
    private _adminService: AdminService
  ) { }

  async ngOnInit(): Promise<void> {
    this.examList = await this._adminService.getExamList();
  }

  goToExamDetails(examId: number) {
    this._router.navigate(['admin', 'exam-details', examId])
  }

  createExam() {
    this._router.navigate(['admin', 'create-exam']);
  }

}
