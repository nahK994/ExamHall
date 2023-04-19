import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AppService } from 'src/app/app.service';

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
}
