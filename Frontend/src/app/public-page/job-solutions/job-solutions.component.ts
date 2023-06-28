import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Chapter, Subject } from '../../admin/admin.service';
import { Question } from '../../user/user.service';
import { PublicPageService } from '../public-page.service';

@Component({
  selector: 'app-job-solutions',
  templateUrl: './job-solutions.component.html',
  styleUrls: ['./job-solutions.component.scss']
})
export class JobSolutionsComponent implements OnInit {

  subject: FormControl = new FormControl('');
  chapter: FormControl = new FormControl('');
  jobSolutions: Subject[] = [];
  chapters: Chapter[] = [];
  questions: Question[] = [];

  constructor(
    private _router: Router,
    private _publicPageService: PublicPageService
  ) { }

  async ngOnInit(): Promise<void> {
    this.jobSolutions = await this._publicPageService.getJobSolutions();

    this.subject.valueChanges.subscribe(res => {
      this.questions = []
      this.chapters = this.jobSolutions[res].chapters;
      for(let chapterIndex=0 ; chapterIndex<this.chapters.length ; chapterIndex++) {
        this.questions = this.questions.concat(this.chapters[chapterIndex].questions!)
      }
    })

    this.chapter.valueChanges.subscribe(res => {
      this.questions = [];
      this.questions = this.questions.concat(this.chapters[res].questions!)
    })
  }

  login() {
    this._router.navigate(['login'])
  }

  goBack() {
    this._router.navigate([''])
  }

}
