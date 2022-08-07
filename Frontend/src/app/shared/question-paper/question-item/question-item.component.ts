import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/user/home/model-test/model-test.service';
import { QuestionPaperService } from '../question-paper.service';

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

  constructor(
    private _questionPaperService: QuestionPaperService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.answer.valueChanges.subscribe(res => {
      this.answerOut.emit({
        "questionId": this.question?.questionId,
        "answer": res
      });
    })
  }

  async markAsFavourite() {
    if(this.question) {
      let userId = this._activatedRoute.snapshot.params['userId'];
      await this._questionPaperService.markQuestionAsFavourite(this.question.questionId, userId);
    }
  }

}
