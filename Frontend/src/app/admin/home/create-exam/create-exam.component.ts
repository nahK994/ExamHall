import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Topic } from 'src/app/user/home/model-test/model-test.service';
import { CreateExamService } from './create-exam.service';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss']
})
export class CreateExamComponent implements OnInit {

  allTopics: Topic[] = [];

  topic: FormControl = new FormControl('')

  constructor(
    private _activateRoute: ActivatedRoute,
    private _router: Router,
    private _createExamService: CreateExamService
  ) { }

  async ngOnInit(): Promise<void> {
    this.allTopics = await this._createExamService.getTopics();
  }

  goBack() {
    this._router.navigate(['..'], {
      relativeTo: this._activateRoute
    })
  }

  logout() {
    this._router.navigate(['admin']);
  }

  createTopic() {
    this._router.navigate(['create-topic'], {
      relativeTo: this._activateRoute
    })
  }

  createQuestion() {
    this._router.navigate(['create-question'], {
      relativeTo: this._activateRoute
    })
  }

}
