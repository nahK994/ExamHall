import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AppService } from '../app.service';

export interface LoginInfo {
  email: string,
  password: string;
}

interface UserInfo {
  name: string,
  email: string,
  password: string
}

export interface Question {
  questionId: number,
  questionText: string,
  option1: string,
  option2: string,
  option3: string,
  option4: string,
  option5: string,
  option6: string,
  answer: string,
  explaination: string,
  topicId: number
}

export interface Topic {
  topicId: number,
  name: string
}

export interface ExamListItem {
  examId: number,
  name: string
}

export interface UserLoginInfo 
{
  isAdmin: boolean,
  refresh: string,
  access: string
}

export interface Exam {
  examId: number,
  name: string,
  numberForCorrectAnswer: number,
  numberForIncorrectAnswer: number,
  numberOfSeats: number,
  questions: Question[],
  topics: Topic[]
}

export interface Result {
  examInfo: {
    numberForCorrectAnswer: number,
    numberForIncorrectAnswer: number,
    name: string,
    numberOfSeats: number,
    cutMark: number
  },
  userResult: {
    numberOfCorrectAnswer: number,
    numberOfIncorrectAnswer: number,
    marks: number,
    topic: Topic
  }[],
  rankList: {
    name: string,
    userId: number,
    totalMarks: number
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private _appService: AppService
  ) { }

  async loginUser(loginInfo: LoginInfo) {
    let loginURL_extention = '/users/login';
    let response: UserLoginInfo = await lastValueFrom(this.http.post<UserLoginInfo>(this._appService.doamin + loginURL_extention, loginInfo, this._appService.httpOptions));
    return response;
  }

  async createUser(userInfo: UserInfo) {
    let updateURL_extention = '/users/create';
    let response = await lastValueFrom(this.http.post<number>(this._appService.doamin + updateURL_extention, userInfo, this._appService.httpOptions));

    return response;
  }

  async getUserFavourites() {
    let archiveQuestionURL_extention = '/favourite-questions';
    let response = await lastValueFrom(this.http.get<Question[]>(this._appService.doamin + archiveQuestionURL_extention, this._appService.httpOptions));

    return response;
  }

  async getTopics() {
    let topicURL_extention = '/topics';
    let response = await lastValueFrom(this.http.get<Topic[]>(this._appService.doamin + topicURL_extention, this._appService.httpOptions));

    return response;
  }

  async deleteQuestionFromArchive(questionId: number) {
    let archiveURL_extention = '/favourite-questions/'+questionId+'/delete';
    let response = await lastValueFrom(this.http.delete<number>(this._appService.doamin+archiveURL_extention, this._appService.httpOptions));
    return response;
  }
}
