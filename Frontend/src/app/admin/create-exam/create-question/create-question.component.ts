import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Topic } from 'src/app/user/user.service';
import { CreateExamService } from '../create-exam.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {

  question: FormGroup;
  allTopics: Topic[] = [];
  
  constructor(
    private _createExamService: CreateExamService,
    private _router: Router,
    private _activateRoute: ActivatedRoute,
    private _fb: FormBuilder
  ) {
    this.question = this._fb.group({
      questionText: ['', [Validators.required]],
      explaination: ['', [Validators.required]],
      topic: [, [Validators.required]],
      answer: ['', [Validators.required]],
      option1: ['', [Validators.required]],
      option2: ['', [Validators.required]],
      option3: ['', [Validators.required]],
      option4: ['', [Validators.required]],
      option5: ['', [Validators.required]],
      option6: ['', [Validators.required]],
    })
  }

  async ngOnInit(): Promise<void> {
    this.allTopics = await this._createExamService.getTopics();
  }

  goBack() {
    this._router.navigate(['..'], {
      relativeTo: this._activateRoute
    })
  }

  logout() {
    this._router.navigate(['admin']);
  }

  async submit() {
    let answer: string = '';
    switch (this.question.value.answer) {
      case '1':
        answer = this.question.get('option1')?.value;
        break;
      case '2':
        answer = this.question.get('option2')?.value;
        break;
      case '3':
        answer = this.question.get('option3')?.value;
        break;
      case '4':
        answer = this.question.get('option4')?.value;
        break;
      case '5':
        answer = this.question.get('option5')?.value;
        break;
      case '6':
        answer = this.question.get('option6')?.value;
        break;
    }
  
    this.question.get('answer')?.setValue(answer);
    await this._createExamService.createQuestion(this.question.value);
    this.question.reset();
  }

}
