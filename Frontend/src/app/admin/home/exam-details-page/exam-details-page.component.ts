import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exam } from 'src/app/user/home/model-test/model-test.service';
import { HomeService, UserRank } from '../home.service';

@Component({
  selector: 'app-exam-details-page',
  templateUrl: './exam-details-page.component.html',
  styleUrls: ['./exam-details-page.component.scss']
})
export class ExamDetailsPageComponent implements OnInit {

  exam!: Exam;
  rankList!: UserRank[];
  cutMarks!: number;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _homeService: HomeService
  ) { }

  async ngOnInit(): Promise<void> {
    let examId = this._activatedRoute.snapshot.params['id'];
    this.exam = await this._homeService.getExamDetails(examId);
    this.rankList = await this._homeService.getUserRankList(examId);
    this.cutMarks = this.rankList[this.exam.numberOfSeats-1].totalMarks
  }

  goBack() {
    this._router.navigate(['admin'])
  }

}
