import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Question } from 'src/app/user/user.service';
import { ExplanationModalComponent } from './explanation-modal/explanation-modal.component';

@Component({
  selector: 'question-viewer',
  templateUrl: './question-viewer.component.html',
  styleUrls: ['./question-viewer.component.scss']
})
export class QuestionViewerComponent implements OnInit {

  displayAnswer: boolean = false;
  @Input() question: Question | undefined;

  constructor(
    private _dialog: MatDialog,
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

}
