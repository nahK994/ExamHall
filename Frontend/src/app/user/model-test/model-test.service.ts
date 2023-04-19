import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { Exam, ExamListItem, Result } from '../user.service';
import { AnswerSheet } from './model-test-details/model-test-details.component';

@Injectable({
  providedIn: 'root'
})
export class ModelTestService {

  constructor(
    private http: HttpClient,
    private _appService: AppService
  ) { }

  async getExamList() {
    let examURL_extention = '/exams';
    let response = await lastValueFrom(this.http.get<ExamListItem[]>(this._appService.doamin+examURL_extention, this._appService.httpOptions));

    return response;
  }

  async getExam(examId: number) {
    let examURL_extention = '/exams/'+examId;
    let response = await lastValueFrom(this.http.get<Exam>(this._appService.doamin+examURL_extention, this._appService.httpOptions));

    return response;
  }

  async getResult(examId: number) {
    let resultURL_extention = '/result/exams/'+examId;
    let response = await lastValueFrom(this.http.get<Result>(this._appService.doamin+resultURL_extention, this._appService.httpOptions));
    return response;
  }

  async createResult(answerSheet: AnswerSheet) {
    let resultURL_extention = '/result/exams';
    let response = await lastValueFrom(this.http.post<AnswerSheet>(this._appService.doamin+resultURL_extention, answerSheet, this._appService.httpOptions));

    return response;
  }
}
