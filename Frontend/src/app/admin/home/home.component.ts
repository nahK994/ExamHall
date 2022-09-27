import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService, ExamList } from '../admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  examList!: ExamList[];

  constructor(
    private _router: Router,
    private _adminService: AdminService,
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

  logout() {
    this._router.navigate(['admin']);
  }

}
