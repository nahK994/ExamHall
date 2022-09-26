import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ExamList, HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  examList!: ExamList[];

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _homeService: HomeService
  ) { }

  async ngOnInit(): Promise<void> {
    this.examList = await this._homeService.getExamList();
  }

  goToExamDetails(examId: number) {
    this._router.navigate(['exam-details', examId], {
      relativeTo: this._activatedRoute
    })
  }

  createExam() {
    this._router.navigate(['create-exam'], {
      relativeTo: this._activatedRoute
    });
  }

  logout() {
    this._router.navigate(['admin', 'login']);
  }

}
