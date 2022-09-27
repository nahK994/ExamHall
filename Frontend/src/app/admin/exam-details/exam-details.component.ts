import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exam } from 'src/app/user/home/model-test/model-test.service';
import { AdminService, UserRank } from '../admin.service';

@Component({
  selector: 'app-exam-details',
  templateUrl: './exam-details.component.html',
  styleUrls: ['./exam-details.component.scss']
})
export class ExamDetailsComponent implements OnInit {

  exam!: Exam;
  rankList!: UserRank[];
  cutMarks!: number;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _adminService: AdminService,
  ) { }

  async ngOnInit(): Promise<void> {
    let examId = this._activatedRoute.snapshot.params['id'];
    this.exam = await this._adminService.getExamDetails(examId);
    this.rankList = await this._adminService.getUserRankList(examId);
    this.cutMarks = this.rankList[this.exam.numberOfSeats-1].totalMarks
  }

  goBack() {
    this._router.navigate(['admin', 'home'])
  }

}
