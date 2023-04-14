import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { RankListDialogComponent } from 'src/app/shared/rank-list-dialog/rank-list-dialog.component';
import { Exam } from 'src/app/user/user.service';
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
    private _dialog: MatDialog
  ) { }

  async ngOnInit(): Promise<void> {
    let examId = this._activatedRoute.snapshot.params['id'];
    this.exam = await this._adminService.getExamDetails(examId);
    this.rankList = await this._adminService.getUserRankList(examId);
    if(!this.rankList.length)
      this.cutMarks = 0;
    else if(this.exam.numberOfSeats < this.rankList.length)
      this.cutMarks = this.rankList[this.exam.numberOfSeats-1].totalMarks
    else
      this.cutMarks = this.rankList[this.rankList.length-1].totalMarks
  }

  goBack() {
    this._router.navigate(['admin', 'home'])
  }

  seeRankList() {
    this._dialog.open(RankListDialogComponent, {
      data: this.rankList
    })
  }

}
