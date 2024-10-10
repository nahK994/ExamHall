import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ExamDetails } from 'src/app/user/user.service';

export interface ResultItem {
  questionId: number,
  answer: string
}

@Component({
  selector: 'exam-paper',
  templateUrl: './exam-paper.component.html',
  styleUrls: ['./exam-paper.component.scss']
})
export class ExamPaperComponent {

  answers: ResultItem[] = [];
  timeLeft: number = 0;

  @Output() startExamEvent = new EventEmitter();
  @Output() submitAnswerEvent = new EventEmitter();

  exam!: ExamDetails;
  @Input('exam') set setExam(exam: ExamDetails) {
    if (!exam) {
      return;
    }

    this.exam = exam;
    this.timeLeft = this.timeStringToSeconds(this.exam.duration);

    for (let question of this.exam.questions) {
      let result: ResultItem = {
        answer: "",
        questionId: question.questionId
      }

      this.answers.push(result);
    }
  }

  canSubmit:boolean = false;
  @Input('canSubmit') set setCanSubmit(canSubmit: boolean) {
    this.canSubmit = canSubmit;
  }
  examStarted: boolean = false;

  constructor(
    private _router: Router
  ) { }

  updateAnswerSheet(answerItem: ResultItem) {
    for (let ans of this.answers) {
      if (answerItem.questionId === ans.questionId) {
        ans.answer = answerItem.answer;
      }
    }
  }

  submit() {
    this.submitAnswerEvent.emit({
      answerSheet: this.answers
    })
    this._router.navigate(['user']);
  }

  timeStringToSeconds(time: string) {
    var a = time.split(':');
    var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
    return seconds
  }

  startExam() {
    this.examStarted = true;
    setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }
    },1000);
    this.startExamEvent.emit();
  }
  
  counterToTimeConvert(counter: number) {
    let hour = Math.floor(counter/3600);
    let minute = Math.floor((counter%3600)/60);
    let second = (counter%3600)%60
    return hour+" : "+minute+" : "+second;
  }
}
