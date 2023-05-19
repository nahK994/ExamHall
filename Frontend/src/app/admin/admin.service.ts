import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AppService } from '../app.service';
import { Exam, Question, Topic } from '../user/user.service';

export interface ExamList {
  examId: number,
  name: string
}

export interface UserRank {
  userId: number,
  name: string,
  totalMarks: number
}

export interface CreateTopicModel {
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient,
    private _appService: AppService
  ) { }

  async getExamList() {
    let updateURL_extention = '/exams';
    let response = await lastValueFrom(this.http.get<ExamList[]>(this._appService.doamin+updateURL_extention, this._appService.httpOptions));

    return response;
  }

  async getExamDetails(examId: number) {
    let updateURL_extention = '/exams/'+examId;
    let response = await lastValueFrom(this.http.get<Exam>(this._appService.doamin+updateURL_extention, this._appService.httpOptions));

    return response;
  }

  async getUserRankList(examId: number) {
    let updateURL_extention = '/rank-list/exams/'+examId;
    let response = await lastValueFrom(this.http.get<UserRank[]>(this._appService.doamin+updateURL_extention, this._appService.httpOptions));

    return response;
  }

  async getSubjects() {
    let topicURL_extention = '/subjects';
    let response = await lastValueFrom(this.http.get<Topic[]>(this._appService.doamin+topicURL_extention, this._appService.httpOptions));

    return response;
  }

  async getQuestions() {
    let questionURL_extention = '/questions';
    let response = await lastValueFrom(this.http.get<Question[]>(this._appService.doamin+questionURL_extention, this._appService.httpOptions));

    return response;
  }

  async createTopic(topic: CreateTopicModel) {
    let topicURL_extention = '/subjects';
    let response = await lastValueFrom(this.http.post<number>(this._appService.doamin+topicURL_extention, topic, this._appService.httpOptions));

    return response;
  }

  async deleteTopic(topicId: number) {
    let topicURL_extention = '/subjects/'+topicId;
    let response = await lastValueFrom(this.http.delete<number>(this._appService.doamin+topicURL_extention, this._appService.httpOptions));

    return response;
  }

  async createQuestion(question: Question) {
    let questionURL_extention = '/questions';
    let response = await lastValueFrom(this.http.post<number>(this._appService.doamin+questionURL_extention, question, this._appService.httpOptions));

    return response;
  }

  async createExam(exam: Exam) {
    let examURL_extention = '/exams';
    let response = await lastValueFrom(this.http.post<number>(this._appService.doamin+examURL_extention, exam, this._appService.httpOptions));

    return response;
  }
}
