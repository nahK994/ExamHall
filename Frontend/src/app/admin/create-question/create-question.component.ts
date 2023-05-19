import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'src/app/user/user.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {

  question: FormGroup;
  allSubjects: Subject[] = [];
  
  constructor(
    private _adminService: AdminService,
    private _fb: FormBuilder
  ) {
    this.question = this._fb.group({
      questionText: ['', [Validators.required]],
      explaination: ['', [Validators.required]],
      subject: [, [Validators.required]],
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
    this.allSubjects = await this._adminService.getSubjects();
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
    await this._adminService.createQuestion(this.question.value);
    this.question.reset();
  }

}
