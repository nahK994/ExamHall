import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AppService } from '../app.service';
import { Exam } from '../user/user.service';

export interface ExamList {
  examId: number,
  name: string
}

export interface UserRank {
  userId: number,
  name: string,
  totalMarks: number
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
    let updateURL_extention = '/result/exams/'+examId+'/rank-list';
    let response = await lastValueFrom(this.http.get<UserRank[]>(this._appService.doamin+updateURL_extention, this._appService.httpOptions));

    return response;
  }
}
