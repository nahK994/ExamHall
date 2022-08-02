import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

interface UserInfo {
  name: string,
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  baseUrl_User: string = 'http://localhost:8010/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  async createUser(userInfo: UserInfo) {
    let updateURL_extention = 'user/create/';
    let response = await lastValueFrom(this.http.post<number>(this.baseUrl_User+updateURL_extention, userInfo, this.httpOptions));

    return response;
  }
}
