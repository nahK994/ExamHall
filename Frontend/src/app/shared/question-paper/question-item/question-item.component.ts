import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Question } from 'src/app/home/model-test/model-test.service';

@Component({
  selector: 'question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss']
})
export class QuestionItemComponent implements OnInit {

  @Output() answerOut = new EventEmitter();

  question: Question | undefined;
  @Input('question') set setQuestion(question: Question) {
    if(!question) {
      return;
    }

    this.question = question;
    this.question.questionText
  }

  answer: FormControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.answer.valueChanges.subscribe(res => {
      this.answerOut.emit({
        "questionId": this.question?.questionId,
        "answer": res
      });
    })
  }

}
