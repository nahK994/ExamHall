import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Question } from 'src/app/user/home/model-test/model-test.service';
import { ExplanationModalComponent } from './explanation-modal/explanation-modal.component';

@Component({
  selector: 'question-viewer',
  templateUrl: './question-viewer.component.html',
  styleUrls: ['./question-viewer.component.scss']
})
export class QuestionViewerComponent implements OnInit {

  displayAnswer: boolean = false;
  @Input() info: Question | undefined;

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
