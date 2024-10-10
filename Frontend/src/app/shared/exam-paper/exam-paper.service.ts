import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { Question } from 'src/app/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ExamPaperService {

  constructor(
    private http: HttpClient,
    private _appService: AppService
  ) { }

  async markQuestionAsFavourite(questionId: number) {
    let archiveURL_extention = '/favourite-questions/'+questionId;
    let response = await lastValueFrom(this.http.put<string>(this._appService.doamin+archiveURL_extention, {}, this._appService.httpOptions));
    return response;
  }

  async getQuestion(questionId: number) {
    let questionURL_extention = '/questions/'+questionId;
    let response = await lastValueFrom(this.http.get<Question>(this._appService.doamin+questionURL_extention, this._appService.httpOptions));

    return response;
  }
}
