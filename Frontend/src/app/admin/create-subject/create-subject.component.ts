import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserEnum } from 'src/app/shared/page-container/page-container.component';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.scss']
})
export class CreateSubjectComponent {

  topic: FormGroup;
  userType = UserEnum;
  
  constructor(
    private _adminService: AdminService,
    private _fb: FormBuilder
  ) {
    this.topic = this._fb.group({
      name: ['', [Validators.required]]
    })
  }

  async submit() {
    await this._adminService.createSubject(this.topic.value);
    this.topic.reset();
  }

}
