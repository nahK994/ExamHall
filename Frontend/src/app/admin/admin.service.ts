import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AppService } from '../app.service';
import { AllQuestions, Exam, Question, Subject } from '../user/user.service';

export interface ExamList {
  examId: number,
  name: string,
  duration: string,
  date: string
}

export interface UserRank {
  userId: number,
  name: string,
  totalMarks: number
}

export interface QuestionBank {
  id: number,
  examName: string,
  category: "BSC"
  questions?: Question[]
}

export interface CreateSubjectModel {
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

  async getQuestions() {
    let questionURL_extention = '/questions';
    let response = await lastValueFrom(this.http.get<Question[]>(this._appService.doamin+questionURL_extention, this._appService.httpOptions));

    return response;
  }

  async getQuestion(questionId: number) {
    let questionURL_extention = '/questions/'+questionId;
    let response = await lastValueFrom(this.http.get<Question>(this._appService.doamin+questionURL_extention, this._appService.httpOptions));

    return response;
  }

  async getAllQuestions() {
    let subjectURL_extention = '/all-questions';
    let response = await lastValueFrom(this.http.get<AllQuestions[]>(this._appService.doamin+subjectURL_extention, this._appService.httpOptions));

    return response;
  }

  async createSubject(subject: CreateSubjectModel) {
    let subjectURL_extention = '/subjects';
    let response = await lastValueFrom(this.http.post<number>(this._appService.doamin+subjectURL_extention, subject, this._appService.httpOptions));

    return response;
  }

  async deleteSubject(subjectId: number) {
    let subjectURL_extention = '/subjects/'+subjectId;
    let response = await lastValueFrom(this.http.delete<number>(this._appService.doamin+subjectURL_extention, this._appService.httpOptions));

    return response;
  }

  async createQuestion(question: Question) {
    let questionURL_extention = '/questions';
    let response = await lastValueFrom(this.http.post<number>(this._appService.doamin+questionURL_extention, question, this._appService.httpOptions));

    return response;
  }

  async updateQuestion(questionId: number, question: Question) {
    let questionURL_extention = '/questions/'+questionId;
    let response = await lastValueFrom(this.http.put<number>(this._appService.doamin+questionURL_extention, question, this._appService.httpOptions));

    return response;
  }

  async deleteQuestion(questionId: number) {
    let questionURL_extention = '/questions/'+questionId;
    let response = await lastValueFrom(this.http.delete<number>(this._appService.doamin+questionURL_extention, this._appService.httpOptions));

    return response;
  }

  async createExam(exam: Exam) {
    let examURL_extention = '/exams';
    let response = await lastValueFrom(this.http.post<number>(this._appService.doamin+examURL_extention, exam, this._appService.httpOptions));

    return response;
  }

  async getQuestionBanks() {
    let questionBankURL_extention = '/question-banks';
    let response = await lastValueFrom(this.http.get<QuestionBank[]>(this._appService.doamin+questionBankURL_extention, this._appService.httpOptions));

    return response;
  }

  async getExamQuestions(examReferenceId: number) {
    let questionBankURL_extention = '/question-banks/'+examReferenceId;
    let response = await lastValueFrom(this.http.get<QuestionBank>(this._appService.doamin+questionBankURL_extention, this._appService.httpOptions));

    return response;
  }
}
