import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamList } from 'src/app/admin/admin.service';
import { Question, Subject, UserExamList, UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  examList: UserExamList | undefined;

  questions: Question[] = [];
  userArchivedQuestions!: Question[];
  allSubjects: Subject[] = [];

  subject: FormControl = new FormControl('');

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _activatedRoute: ActivatedRoute,
  ) { }

  async ngOnInit(): Promise<void> {
    this.examList = await this._userService.getExamList();
    this.allSubjects = await this._userService.getUserFavourites();
  }

  goModelTests() {
    this._router.navigate(['model-tests'])
  }

  goToFavourite() {
    this._router.navigate(['favourites'])
  }

  goToExam(exam: ExamList) {
    this._router.navigate(['exam', exam.examId], {
      relativeTo: this._activatedRoute
    })
  }

  goToResult(exam: ExamList) {
    this._router.navigate(['result', exam.examId], {
      relativeTo: this._activatedRoute
    })
  }

  async deleteFromArchive(questionId: number) {
    await this._userService.deleteQuestionFromArchive(questionId);
  }

}
