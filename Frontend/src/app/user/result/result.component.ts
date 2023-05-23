import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { RankListDialogComponent } from 'src/app/shared/rank-list-dialog/rank-list-dialog.component';
import { Result, UserService } from '../user.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  result !: Result;
  examId !: number

  constructor(
    private _dialog: MatDialog,
    private _activateRoute: ActivatedRoute,
    private _userService: UserService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.examId = Number(this._activateRoute.snapshot.params['examId']);
    this.result = await this._userService.getResult(this.examId);
  }

  seeRankList() {
    this._dialog.open(RankListDialogComponent, {
      data: this.result.rankList
    })
  }

}
