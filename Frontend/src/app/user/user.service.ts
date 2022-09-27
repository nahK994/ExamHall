import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

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
  topic: number
}

export interface Topic {
  topicId: number,
  name: string
}

export interface ExamListItem {
  examId: number,
  name: string
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
    totalMarks: number,
    topic: Topic
  }[],
  rankList: {
    name: string,
    userId: number,
    totalMarks: number
  }[]
}

export interface UserArchivedQuestionList {
  user: {
    userId: number,
    name: string
  },
  questions: Question[]
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl_User: string = 'http://localhost:8004/';
  baseUrl_Favourite: string = 'http://localhost:8001/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  async loginUser(loginInfo: LoginInfo) {
    let updateURL_extention = 'users/login';
    let response = await lastValueFrom(this.http.post<number>(this.baseUrl_User+updateURL_extention, loginInfo, this.httpOptions));

    return response;
  }

  async createUser(userInfo: UserInfo) {
    let updateURL_extention = 'users/create';
    let response = await lastValueFrom(this.http.post<number>(this.baseUrl_User+updateURL_extention, userInfo, this.httpOptions));

    return response;
  }

  async getUserFavourites(userId: number) {
    let updateURL_extention = 'favourite-questions/users/'+userId;
    let response = await lastValueFrom(this.http.get<UserArchivedQuestionList>(this.baseUrl_Favourite+updateURL_extention, this.httpOptions));

    return response;
  }

  async getTopics() {
    let updateURL_extention = 'topics';
    let response = await lastValueFrom(this.http.get<Topic[]>(this.baseUrl_Favourite+updateURL_extention, this.httpOptions));

    return response;
  }
}
