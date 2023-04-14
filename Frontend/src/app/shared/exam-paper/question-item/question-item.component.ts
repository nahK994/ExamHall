import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Question } from 'src/app/user/user.service';
import { ExamPaperService } from '../exam-paper.service';

@Component({
  selector: 'question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss']
})
export class QuestionItemComponent implements OnInit {

  archived: boolean = false;
  @Output() answerOut = new EventEmitter();

  question: Question | undefined;
  @Input('question') set setQuestion(question: Question) {
    if(!question) {
      return;
    }

    this.question = question;
  }

  canSubmit !: boolean;
  @Input('canSubmit') set setCanSubmit(canSubmit: boolean) {
    this.canSubmit = canSubmit;
  }

  answer: FormControl = new FormControl('');

  constructor(
    private _examPaperService: ExamPaperService
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
      try {
        await this._examPaperService.markQuestionAsFavourite(this.question.questionId);
      }
      catch(e) {
      }
    }
    this.archived = true;
  }

}
