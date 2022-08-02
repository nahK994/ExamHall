import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Question, Topic } from '../model-test/model-test.service';
import { UserFavourite } from './favourite.component';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  baseUrl_Favourite: string = 'http://localhost:8000/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  async getUserFavourites(userId: number) {
    let updateURL_extention = 'favourite-questions/get/user/'+userId;
    let response = await lastValueFrom(this.http.get<Question[]>(this.baseUrl_Favourite+updateURL_extention, this.httpOptions));

    return response;
  }

  async getTopics() {
    let updateURL_extention = 'topic/get/';
    let response = await lastValueFrom(this.http.get<Topic[]>(this.baseUrl_Favourite+updateURL_extention, this.httpOptions));

    return response;
  }
}
