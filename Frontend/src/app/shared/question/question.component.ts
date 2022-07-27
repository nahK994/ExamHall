import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExplanationModalComponent } from './explanation-modal/explanation-modal.component';

export interface question {
  questionText: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
  option6: string;
  answer: string;
  explaination: string;
  topic: string;
}

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  displayAnswer: boolean = false;
  @Input() info: question | undefined;

  constructor(
    private _dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  seeExplanation() {
    let explaination = this.info?.explaination;
    this._dialog.open(ExplanationModalComponent, {
      data: explaination
    })
  }

  seeAnswer() {
    this.displayAnswer = !this.displayAnswer;
  }

}
