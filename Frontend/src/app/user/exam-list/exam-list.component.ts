import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamList } from 'src/app/admin/admin.service';
import { UserExamList, UserService } from '../user.service';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {

  examList: ExamList[] = [];

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  async ngOnInit(): Promise<void> {
    this.examList = await this._userService.getPendingExamList();
  }

  goModelTests() {
    this._router.navigate(['model-tests'])
  }

  goToExam(exam: ExamList) {
    if(new Date(new Date(exam.date).toDateString()) > new Date()) {
      this._snackBar.open('Cannot enroll the exam yet', '', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 1500
      });
      return;
    }
    this._router.navigate(['exam', exam.examId], {
      relativeTo: this._activatedRoute
    })
  }

}
