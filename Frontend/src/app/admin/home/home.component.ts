import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Question, Subject } from 'src/app/user/user.service';
import { AdminService, ExamList } from '../admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  examList!: ExamList[];
  allSubjects: Subject[] = [];
  questions: Question[] = [];
  allQuestions: Question[] = [];

  constructor(
    private _router: Router,
    private _adminService: AdminService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.examList = await this._adminService.getExamList();
    this.allSubjects = await this._adminService.getSubjects();
    let allQuestions = []
    for(let subject of this.allSubjects) {
      for(let question of subject.questions) {
        allQuestions.push(question);
      }
    }
    this.allQuestions = allQuestions;
  }

  goToExamDetails(examId: number) {
    this._router.navigate(['admin', 'exam-details', examId])
  }

  createExam() {
    this._router.navigate(['admin', 'create-exam']);
  }

  createSubject() {
    this._router.navigate(['admin', 'create-subject'])
  }

  createQuestion() {
    this._router.navigate(['admin', 'create-question'])
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
