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
  topic: FormControl = new FormControl('')
  topicListForQuestionSelection: Topic[] = [];

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
      questions: [[]],
      topics: [[]]
    })
  }

  async ngOnInit(): Promise<void> {
    this.allTopics = await this._createExamService.getTopics();
    this.allQuestions = await this._createExamService.getQuestions();

    this.topic.valueChanges.subscribe(res => {
      let questions: Question[] = [];
      for(let question of this.allQuestions) {
        if(question.topic === res) {
          questions.push(question);
        }
      }

      this.questions = questions;
    })
  }

  goBack() {
    this._router.navigate(['..'], {
      relativeTo: this._activateRoute
    })
  }

  logout() {
    this._router.navigate(['admin']);
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

  selectTopic(topicId: number) {
    let topics = this.form.get('topics')?.value;
    topics.push(topicId);
    this.form.get('topics')?.setValue(topics);

    for(let topic of this.allTopics) {
      if(topic.topicId === topicId) {
        this.topicListForQuestionSelection.push(topic);
      }
    }
  }

  deSelectTopic(topicId: number) {
    let topics = this.form.get('topics')?.value;
    let index = topics.indexOf(topicId);
    topics.splice(index, 1);
    this.form.get('topics')?.setValue(topics);

    index = this.topicListForQuestionSelection.findIndex(item => item.topicId === topicId);
    this.topicListForQuestionSelection.splice(index, 1);
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
      this.topicListForQuestionSelection = [];
    }
    catch (e) {
      console.log(e);
    }
  }

}
