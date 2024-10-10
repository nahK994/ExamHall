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
  questionId: number = -1
  @Input('questionId') set setQuestion(questionId: number) {
    this.questionId = questionId;
  }

  examStarted !: boolean;
  @Input('examStarted') set setExamStarted(examStarted: boolean) {
    this.examStarted = examStarted;
  }

  answer: FormControl = new FormControl('');

  constructor(
    private _examPaperService: ExamPaperService
  ) { }

  async ngOnInit(): Promise<void> {
    this.question = await this._examPaperService.getQuestion(this.questionId)
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
