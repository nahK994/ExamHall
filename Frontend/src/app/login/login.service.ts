import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

interface LoginInfo {
  email: string,
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl_User: string = 'http://localhost:8010/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  async loginUser(loginInfo: LoginInfo) {
    let updateURL_extention = 'user/login/';
    let response = await lastValueFrom(this.http.post<number>(this.baseUrl_User+updateURL_extention, loginInfo, this.httpOptions));

    return response;
  }
}
