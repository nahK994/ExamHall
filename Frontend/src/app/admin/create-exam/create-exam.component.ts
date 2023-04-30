import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question, Topic } from 'src/app/user/user.service';
import { CreateExamService } from './create-exam.service';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss']
})
export class CreateExamComponent implements OnInit {

  allTopics: Topic[] = [];
  questions: Question[] = [];
  allQuestions: Question[] = [];
  topic: FormControl = new FormControl('');

  form: FormGroup;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _router: Router,
    private _createExamService: CreateExamService,
    private _fb: FormBuilder
  ) {
    this.form = this._fb.group({
      name: ['', [Validators.required]],
      numberForCorrectAnswer: [, [Validators.required]],
      numberForIncorrectAnswer: [, [Validators.required]],
      numberOfSeats: [, [Validators.required]],
      questions: [[]]
    })
  }

  async ngOnInit(): Promise<void> {
    this.allTopics = await this._createExamService.getTopics();
    let allQuestions = []
    for(let topic of this.allTopics) {
      for(let question of topic.questions) {
        allQuestions.push(question);
      }
    }
    this.allQuestions = allQuestions;

    this.topic.valueChanges.subscribe(res => {
      let questions: Question[] = [];
      for (let question of this.allQuestions) {
        if (question.topic === res) {
          questions.push(question);
        }
      }

      this.questions = questions;
    })
  }

  createTopic() {
    this._router.navigate(['create-topic'], {
      relativeTo: this._activateRoute
    })
  }

  createQuestion() {
    this._router.navigate(['create-question'], {
      relativeTo: this._activateRoute
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
      let numberForCorrectAnswer = Number(this.form.get('numberForCorrectAnswer')?.value);
      let numberForIncorrectAnswer = Number(this.form.get('numberForIncorrectAnswer')?.value);
      let numberOfSeats = Number(this.form.get('numberOfSeats')?.value);

      this.form.get('numberForCorrectAnswer')?.setValue(numberForCorrectAnswer);
      this.form.get('numberForIncorrectAnswer')?.setValue(numberForIncorrectAnswer);
      this.form.get('numberOfSeats')?.setValue(numberOfSeats);

      this._createExamService.createExam(this.form.value)
      this.form.reset();

      this._router.navigate(['admin/home']);
    }
    catch (e) {
      console.log(e);
    }
  }

}
