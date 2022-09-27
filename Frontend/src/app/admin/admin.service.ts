import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Exam, LoginInfo } from '../user/user.service';

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

  baseUrl_User: string = 'http://localhost:8004/';
  baseUrl_Exam: string = 'http://localhost:8002/';
  baseUrl_Result: string = 'http://localhost:8003/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  async loginAdmin(loginInfo: LoginInfo) {
    let updateURL_extention = 'users/admin';
    let response = await lastValueFrom(this.http.post<string>(this.baseUrl_User+updateURL_extention, loginInfo, this.httpOptions));

    return response;
  }

  async getExamList() {
    let updateURL_extention = 'exams';
    let response = await lastValueFrom(this.http.get<ExamList[]>(this.baseUrl_Exam+updateURL_extention, this.httpOptions));

    return response;
  }

  async getExamDetails(examId: number) {
    let updateURL_extention = 'exams/'+examId;
    let response = await lastValueFrom(this.http.get<Exam>(this.baseUrl_Exam+updateURL_extention, this.httpOptions));

    return response;
  }

  async getUserRankList(examId: number) {
    let updateURL_extention = 'result/exam/'+examId+'/rank-list';
    let response = await lastValueFrom(this.http.get<UserRank[]>(this.baseUrl_Result+updateURL_extention, this.httpOptions));

    return response;
  }
}
