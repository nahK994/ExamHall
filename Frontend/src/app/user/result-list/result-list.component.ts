import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamList } from 'src/app/admin/admin.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {

  examList: ExamList[] = [];

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _activatedRoute: ActivatedRoute,
  ) { }

  async ngOnInit(): Promise<void> {
    this.examList = await this._userService.getCompletedExamList();
  }

  goToResult(exam: ExamList) {
    this._router.navigate(['result', exam.examId], {
      relativeTo: this._activatedRoute
    })
  }

}
