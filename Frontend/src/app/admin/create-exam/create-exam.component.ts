import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserEnum } from 'src/app/shared/page-container/page-container.component';
import { SubjectWiseQuestions, Question, Subject } from 'src/app/user/user.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss']
})
export class CreateExamComponent implements OnInit {

  allSubjects: SubjectWiseQuestions[] = [];
  questions: Question[] = [];
  allQuestions: Question[] = [];
  subject: FormControl = new FormControl('');
  hour: FormControl = new FormControl('');
  minute: FormControl = new FormControl('');
  userType = UserEnum;

  form: FormGroup;

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _adminService: AdminService
  ) {
    this.form = this._fb.group({
      name: ['', [Validators.required]],
      numberForCorrectAnswer: [, [Validators.required]],
      numberForIncorrectAnswer: [, [Validators.required]],
      numberOfSeats: [, [Validators.required]],
      questions: [[]],
      date: [],
      duration: []
    })
  }

  async ngOnInit(): Promise<void> {
    this.allSubjects = await this._adminService.getAllQuestions();
    let allQuestions = []
    for(let subject of this.allSubjects) {
      for(let question of subject.questions) {
        allQuestions.push(question);
      }
    }
    this.allQuestions = allQuestions;

    this.subject.valueChanges.subscribe(res => {
      let questions: Question[] = [];
      for (let question of this.allQuestions) {
        if (question.chapterId === res) {
          questions.push(question);
        }
      }

      this.questions = questions;
    })
  }

  selectQuestion(questionId: number) {
    let questions = this.form.get('questions')?.value;
    questions.push(questionId);
    this.form.get('questions')?.setValue(questions);
  }

  deSelectQuestion(questionId: number) {
    let questions = this.form.get('questions')?.value;
    let index = questions.indexOf(questionId);
    questions.splice(index, 1);
    this.form.get('questions')?.setValue(questions);
  }

  isSelectedQuestion(question: Question) {
    return this.form.get('questions')?.value.includes(question.questionId)
  }

  createExam() {
    try {
      let dd = new Date(this.form.value.date);
      let year = dd.getFullYear();
      let month = dd.getMonth()+1;
      let day = dd.getDate();
      this.form.get('date')?.setValue(year+'-'+month+'-'+day);
      this.form.get('duration')?.setValue(this.hour.value+":"+this.minute.value);

      let numberForCorrectAnswer = Number(this.form.get('numberForCorrectAnswer')?.value);
      let numberForIncorrectAnswer = Number(this.form.get('numberForIncorrectAnswer')?.value);
      let numberOfSeats = Number(this.form.get('numberOfSeats')?.value);

      this.form.get('numberForCorrectAnswer')?.setValue(numberForCorrectAnswer);
      this.form.get('numberForIncorrectAnswer')?.setValue(numberForIncorrectAnswer);
      this.form.get('numberOfSeats')?.setValue(numberOfSeats);

      this._adminService.createExam(this.form.value)
      this.form.reset();

      this._router.navigate(['admin']);
    }
    catch (e) {
      console.log(e);
    }
  }

}
