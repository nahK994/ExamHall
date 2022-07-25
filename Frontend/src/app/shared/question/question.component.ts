import { Component, Input, OnInit } from '@angular/core';

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
  displayExplanation: boolean = false;
  @Input() info: question | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  seeExplanation() {
    if(this.displayAnswer) {
      this.displayAnswer = false;
    }
    this.displayExplanation = !this.displayExplanation;
  }

  seeAnswer() {
    if(this.displayExplanation) {
      this.displayExplanation = false;
    }
    this.displayAnswer = !this.displayAnswer;
  }

}
