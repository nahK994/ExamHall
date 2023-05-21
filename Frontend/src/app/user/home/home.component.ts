import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamListItem, Question, Subject, UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  examList: ExamListItem[] = [];
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
    let questions = []
    for(let subject of this.allSubjects) {
      for(let question of subject.questions) {
        questions.push(question);
      }
    }
    this.userArchivedQuestions = questions;
    this.questions = questions;

    this.subject.valueChanges.subscribe(res => {
      if(res === '') {
        this.questions = this.userArchivedQuestions;
        return;
      }
      let questions: Question[] = [];
      for(let question of this.userArchivedQuestions) {
        if(question.subject === res) {
          questions.push(question);
        }
      }

      this.questions = questions;
    })
  }

  goModelTests() {
    this._router.navigate(['model-tests'])
  }

  goToFavourite() {
    this._router.navigate(['favourites'])
  }

  goToExam(exam: ExamListItem) {
    this._router.navigate(['exam', exam.examId], {
      relativeTo: this._activatedRoute
    })
  }

  async deleteFromArchive(question: Question) {
    await this._userService.deleteQuestionFromArchive(question.questionId);

    const index = this.questions.indexOf(question);
    if(index > -1) {
        this.questions.splice(index, 1);
    }
  }

}
