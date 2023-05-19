import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Question, Topic } from 'src/app/user/user.service';
import { AdminService, ExamList } from '../admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  examList!: ExamList[];
  allTopics: Topic[] = [];
  questions: Question[] = [];
  allQuestions: Question[] = [];

  constructor(
    private _router: Router,
    private _adminService: AdminService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.examList = await this._adminService.getExamList();
    this.allTopics = await this._adminService.getSubjects();
    let allQuestions = []
    for(let topic of this.allTopics) {
      for(let question of topic.questions) {
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

  createTopic() {
    this._router.navigate(['admin', 'create-topic'])
  }

  createQuestion() {
    this._router.navigate(['admin', 'create-question'])
  }

  async deleteTopic(topicId: number) {
    await this._adminService.deleteTopic(topicId);
    let subjects = [];
    for(let i=0 ; i<this.allTopics.length ; i++) {
      if(this.allTopics[i].subjectId == topicId)
        continue
      
      subjects.push(this.allTopics[i])
    }
    this.allTopics = subjects;
  }

}
