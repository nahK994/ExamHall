import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService, Chapter, SubjectInterface } from 'src/app/admin/admin.service';
import { Question } from 'src/app/user/user.service';
import { JobSolution, PublicPageService } from '../public-page.service';

@Component({
  selector: 'app-job-solutions',
  templateUrl: './job-solutions.component.html',
  styleUrls: ['./job-solutions.component.scss']
})
export class JobSolutionsComponent implements OnInit {

  subject: FormControl = new FormControl('');
  chapter: FormControl = new FormControl('');
  allSubjects: SubjectInterface[] = [];
  jobSolutions: JobSolution[] = [];
  chapters: Chapter[] = [];
  questions: Question[] = [];

  constructor(
    private _router: Router,
    private _adminService: AdminService,
    private _publicPageService: PublicPageService
  ) { }

  async ngOnInit(): Promise<void> {
    this.allSubjects = await this._adminService.getSubjectWiseChapters();
    this.jobSolutions = await this._publicPageService.getJobSolutions();

    this.subject.valueChanges.subscribe(res => {
      for(let i=0 ; i<this.allSubjects.length ; i++) {
        if(this.allSubjects[i].subjectId === res) {
          this.chapters = this.allSubjects[i].chapters;
          break;
        }
      }
    })

    this.chapter.valueChanges.subscribe(res => {
      this.questions = [];
      for(let i=0 ; i<this.jobSolutions.length ; i++) {
        if(this.jobSolutions[i].subjectId === this.subject.value) {
          for(let j=0 ; j<this.jobSolutions[i].chapters.length ; j++) {
            if(this.jobSolutions[i].chapters[j].chapterId === this.chapter.value) {
              this.questions = this.jobSolutions[i].chapters[j].questions;
              break
            }
          }
        }
        if(this.questions.length)
          break;
      }
    })
  }

  login() {
    this._router.navigate(['login'])
  }

  goBack() {
    this._router.navigate([''])
  }

}
