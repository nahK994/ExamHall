import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { Exam, Question, Topic } from 'src/app/user/user.service';

export interface CreateTopicModel {
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class CreateExamService {

  constructor(
    private http: HttpClient,
    private _appService: AppService
  ) { }

  async getTopics() {
    let topicURL_extention = '/topics';
    let response = await lastValueFrom(this.http.get<Topic[]>(this._appService.doamin+topicURL_extention, this._appService.httpOptions));

    return response;
  }

  async getQuestions() {
    let questionURL_extention = '/questions';
    let response = await lastValueFrom(this.http.get<Question[]>(this._appService.doamin+questionURL_extention, this._appService.httpOptions));

    return response;
  }

  async createTopic(topic: CreateTopicModel) {
    let topicURL_extention = '/topics';
    let response = await lastValueFrom(this.http.post<number>(this._appService.doamin+topicURL_extention, topic, this._appService.httpOptions));

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
