import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { LoginInfo } from 'src/app/user/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl_User: string = 'http://localhost:8004/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  async loginAdmin(loginInfo: LoginInfo) {
    let updateURL_extention = 'users/admin';
    let response = await lastValueFrom(this.http.post<string>(this.baseUrl_User+updateURL_extention, loginInfo, this.httpOptions));

    return response;
  }
}
