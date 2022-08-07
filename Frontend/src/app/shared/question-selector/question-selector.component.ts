import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Question } from 'src/app/user/home/model-test/model-test.service';

@Component({
  selector: 'question-selector',
  templateUrl: './question-selector.component.html',
  styleUrls: ['./question-selector.component.scss']
})
export class QuestionSelectorComponent {

  @Input() isSelected: boolean = false;
  @Input() question: Question | undefined;
  
  @Output() selectQuestion = new EventEmitter();
  @Output() deSelectQuestion = new EventEmitter();

  form: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) {
    this.form = this._fb.group({
      isChecked: false
    })
  }

  takeAction() {
    this.isSelected = !this.isSelected;
    if(this.isSelected) {
      this.selectQuestion.emit(this.question?.questionId);
    }
    else {
      this.deSelectQuestion.emit(this.question?.questionId);
    }
  }

}
