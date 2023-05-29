import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AllQuestions, Question, Subject } from 'src/app/user/user.service';
import { AdminService, ExamList, QuestionBank } from '../admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  examList!: ExamList[];
  allSubjects: AllQuestions[] = [];
  questions: Question[] = [];
  allQuestions: Question[] = [];
  questionBanks: QuestionBank[] = [];
  subject: FormControl = new FormControl('');

  constructor(
    private _router: Router,
    private _adminService: AdminService
  ) { }

  async ngOnInit(): Promise<void> {
    this.examList = await this._adminService.getExamList();
    this.allSubjects = await this._adminService.getAllQuestions();
    this.questionBanks = await this._adminService.getQuestionBanks();
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

  goToQuestionBank(id: number) {
    this._router.navigate(['admin', 'question-bank', id])
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

  async deleteQuestion(questionId: number) {
    await this._adminService.deleteQuestion(questionId);
  }

}
