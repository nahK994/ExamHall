import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Exam, Question } from 'src/app/user/user.service';

export interface ResultItem {
  questionId: number,
  answer: string
}

@Component({
  selector: 'question-paper',
  templateUrl: './question-paper.component.html',
  styleUrls: ['./question-paper.component.scss']
})
export class QuestionPaperComponent implements OnInit {

  answers: ResultItem[] = [];
  questions: Question[] = [];

  @Output() submitAnswer = new EventEmitter();

  exam!: Exam;
  @Input('exam') set setExam(exam: Exam) {
    if (!exam) {
      return;
    }

    this.exam = exam;
    this.questions = this.exam?.questions;

    for (let question of this.questions) {
      let result: ResultItem = {
        answer: "",
        questionId: question.questionId
      }

      this.answers.push(result);
    }
  }

  canSubmit !: boolean;
  @Input('canSubmit') set setCanSubmit(canSubmit: boolean) {
    this.canSubmit = canSubmit;
  }

  constructor() { }

  ngOnInit(): void {
  }

  updateAnswerSheet(answerItem: ResultItem) {
    for (let ans of this.answers) {
      if (answerItem.questionId === ans.questionId) {
        ans.answer = answerItem.answer;
      }
    }
  }

  submit() {
    this.submitAnswer.emit({
      answerSheet: this.answers
    })
  }
}
