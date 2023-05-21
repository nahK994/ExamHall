import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AppService } from '../app.service';

export interface UserInfo {
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
  subject: number
}

export interface Subject {
  subjectId: number,
  name: string,
  questions: Question[]
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
  subjects?: Subject[]
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
    subject: Subject
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

  async getUserFavourites() {
    let archiveQuestionURL_extention = '/favourite-questions';
    let response = await lastValueFrom(this.http.get<Subject[]>(this._appService.doamin + archiveQuestionURL_extention, this._appService.httpOptions));

    return response;
  }

  async getSubjects() {
    let subjectURL_extention = '/subjects';
    let response = await lastValueFrom(this.http.get<Subject[]>(this._appService.doamin + subjectURL_extention, this._appService.httpOptions));

    return response;
  }

  async deleteQuestionFromArchive(questionId: number) {
    let archiveURL_extention = '/favourite-questions/'+questionId;
    let response = await lastValueFrom(this.http.delete<string>(this._appService.doamin+archiveURL_extention, this._appService.httpOptions));
    return response;
  }
}
