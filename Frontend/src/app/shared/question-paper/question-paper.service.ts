import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionPaperService {

  baseUrl_Archive: string = 'http://localhost:8001/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  async markQuestionAsFavourite(questionId: number, userId: number) {
    
    let updateURL_extention = 'favourite-questions/create/user/'+userId+'/question/'+questionId+'/';
    let response = await lastValueFrom(this.http.post<number>(this.baseUrl_Archive+updateURL_extention, {}, this.httpOptions));

    return response;
  }
}
