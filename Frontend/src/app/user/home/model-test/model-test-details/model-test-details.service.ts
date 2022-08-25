import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Exam, Result } from '../model-test.service';
import { AnswerSheet } from './model-test-details.component';

@Injectable({
  providedIn: 'root'
})
export class ModelTestDetailsService {

  baseUrl_Exam: string = 'http://localhost:8002/';
  baseUrl_Result: string = 'http://localhost:8003/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  async getExam(examId: number) {
    let updateURL_extention = 'exam/get/'+examId;
    let response = await lastValueFrom(this.http.get<Exam>(this.baseUrl_Exam+updateURL_extention, this.httpOptions));

    return response;
  }

  async getResult(examId: number, userId: number) {
    let updateURL_extention = 'result/exam/'+examId+'/user/'+userId;
    let response = await lastValueFrom(this.http.get<Result>(this.baseUrl_Result+updateURL_extention, this.httpOptions));

    return response;
  }

  async createResult(answerSheet: AnswerSheet, examId: number, userId: number) {
    let updateURL_extention = 'result/exam/'+examId+'/user/'+userId+'/create/';
    let response = await lastValueFrom(this.http.post<AnswerSheet>(this.baseUrl_Result+updateURL_extention, answerSheet, this.httpOptions));

    return response;
  }
}
