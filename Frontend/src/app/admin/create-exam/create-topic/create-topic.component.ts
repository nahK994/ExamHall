import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateExamService } from '../create-exam.service';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent {

  topic: FormGroup;
  
  constructor(
    private _createExamService: CreateExamService,
    private _fb: FormBuilder
  ) {
    this.topic = this._fb.group({
      name: ['', [Validators.required]]
    })
  }

  async submit() {
    await this._createExamService.createTopic(this.topic.value);
    this.topic.reset();
  }

}
