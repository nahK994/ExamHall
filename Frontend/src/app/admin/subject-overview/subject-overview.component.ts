import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserEnum } from 'src/app/shared/page-container/page-container.component';
import { Subject } from 'src/app/user/user.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-subject-overview',
  templateUrl: './subject-overview.component.html',
  styleUrls: ['./subject-overview.component.scss']
})
export class SubjectOverviewComponent implements OnInit {

  allSubjects: Subject[] = [];
  userType = UserEnum;

  constructor(
    private _router: Router,
    private _adminService: AdminService
  ) { }

  async ngOnInit(): Promise<void> {
    this.allSubjects = await this._adminService.getSubjects();
  }

  createSubject() {
    this._router.navigate(['admin', 'create-subject'])
  }

  async deleteSubject(subjectId: number) {
    await this._adminService.deleteSubject(subjectId);
    let subjects = [];
    for(let i=0 ; i<this.allSubjects.length ; i++) {
      if(this.allSubjects[i].subjectId == subjectId)
        continue
      
      subjects.push(this.allSubjects[i])
    }
    this.allSubjects = subjects;
  }

}
