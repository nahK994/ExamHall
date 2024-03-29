import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateQuestionComponent } from 'src/app/admin/create-question/create-question.component';
import { SubjectWiseQuestions, Question, Subject } from 'src/app/user/user.service';

@Component({
  selector: 'question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  @Input() allSubjects: SubjectWiseQuestions[] = [];
  @Input() canRemove: boolean = false;
  @Input() updateAction: boolean = false;
  @Output() removeEvent = new EventEmitter();

  questions: Question[] = [];
  allQuestions: Question[] = [];
  subject: FormControl = new FormControl('');

  constructor(
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    let allQuestions = []
    for (let subject of this.allSubjects) {
      for (let question of subject.questions) {
        allQuestions.push(question);
      }
    }
    this.allQuestions = allQuestions;
    this.questions = allQuestions;

    this.subject.valueChanges.subscribe(res => {
      if (res === '') {
        this.questions = this.allQuestions;
        return;
      }
      let questions: Question[] = [];
      for (let question of this.allQuestions) {
        if (question.chapterId === res) {
          questions.push(question);
        }
      }

      this.questions = questions;
    })
  }


  deleteQuestion(question: Question) {
    const index = this.questions.indexOf(question);
    if(index > -1) {
        this.questions.splice(index, 1);
    }

    this.removeEvent.emit(question.questionId);
  }

  updateQuestion(questionId: number) {
    this._dialog.open(CreateQuestionComponent, {
      data: questionId
    })
  }

}