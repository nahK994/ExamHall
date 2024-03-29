import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Question } from 'src/app/user/user.service';
import { ExplanationModalComponent } from './explanation-modal/explanation-modal.component';
import { QuestionService } from './question.service';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  displayAnswer: boolean = false;
  @Input() question: Question | undefined;

  constructor(
    private _dialog: MatDialog,
    private _questionService: QuestionService
  ) { }

  ngOnInit(): void {
  }

  seeExplanation() {
    let explaination = this.question?.explaination;
    this._dialog.open(ExplanationModalComponent, {
      data: explaination
    })
  }

  seeAnswer() {
    this.displayAnswer = !this.displayAnswer;
  }

  isURL(str: string | undefined) {
    return this._questionService.isURL(str);
  }

}
