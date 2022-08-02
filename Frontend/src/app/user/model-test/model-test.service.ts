import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

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
  numberOfCorrectAnswer: number,
  numberOfIncorrectAnswer: number,
  totalMarks: number,
  topic: Topic
}

@Injectable({
  providedIn: 'root'
})
export class ModelTestService {

  baseUrl_Exam: string = 'http://localhost:8001/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  async getExamList() {
    let updateURL_extention = 'exam/get/';
    let response = await lastValueFrom(this.http.get<ExamListItem[]>(this.baseUrl_Exam+updateURL_extention, this.httpOptions));

    return response;
  }
}
