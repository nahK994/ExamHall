import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Chapter } from '../admin/admin.service';
import { AppService } from '../app.service';
import { Question } from '../user/user.service';

export interface JobSolution {
  subjectId: number,
  name: string,
  chapters: {
    chapterId: string,
    name: string,
    questions: Question[]
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class JobSolutionsService {

  constructor(
    private http: HttpClient,
    private _appService: AppService
  ) { }

  async getJobSolutions() {
    let updateURL_extention = '/job-solutions';
    let response = await lastValueFrom(this.http.get<JobSolution[]>(this._appService.doamin+updateURL_extention, this._appService.httpOptions));

    return response;
  }

}
