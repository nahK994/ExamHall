import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Exam, Question, Topic } from 'src/app/user/home/model-test/model-test.service';

export interface CreateTopicModel {
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class CreateExamService {

  baseUrl_Exam: string = 'http://localhost:8002/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  async getTopics() {
    let updateURL_extention = 'topic/get/';
    let response = await lastValueFrom(this.http.get<Topic[]>(this.baseUrl_Exam+updateURL_extention, this.httpOptions));

    return response;
  }

  async getQuestions() {
    let updateURL_extention = 'question/get/';
    let response = await lastValueFrom(this.http.get<Question[]>(this.baseUrl_Exam+updateURL_extention, this.httpOptions));

    return response;
  }

  async createTopic(topic: CreateTopicModel) {
    let updateURL_extention = 'topic/create/';
    let response = await lastValueFrom(this.http.post<number>(this.baseUrl_Exam+updateURL_extention, topic, this.httpOptions));

    return response;
  }

  async createQuestion(question: Question) {
    let updateURL_extention = 'question/create/';
    let response = await lastValueFrom(this.http.post<number>(this.baseUrl_Exam+updateURL_extention, question, this.httpOptions));

    return response;
  }

  async createExam(exam: Exam) {
    let updateURL_extention = 'exam/create/';
    let response = await lastValueFrom(this.http.post<number>(this.baseUrl_Exam+updateURL_extention, exam, this.httpOptions));

    return response;
  }
}
