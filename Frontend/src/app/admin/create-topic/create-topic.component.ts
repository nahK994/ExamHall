import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent {

  topic: FormGroup;
  
  constructor(
    private _adminService: AdminService,
    private _fb: FormBuilder
  ) {
    this.topic = this._fb.group({
      name: ['', [Validators.required]]
    })
  }

  async submit() {
    await this._adminService.createTopic(this.topic.value);
    this.topic.reset();
  }

}
