import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { QuestionBank, Subject } from '../admin/admin.service';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class PublicPageService {

  constructor(
    private http: HttpClient,
    private _appService: AppService
  ) { }

  async getJobSolutions() {
    let updateURL_extention = '/job-solutions';
    let response = await lastValueFrom(this.http.get<Subject[]>(this._appService.doamin+updateURL_extention, this._appService.httpOptions));

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
