import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-rank-list-dialog',
  templateUrl: './rank-list-dialog.component.html',
  styleUrls: ['./rank-list-dialog.component.scss']
})
export class RankListDialogComponent {

  rankList: {
    name: string,
    userId: number,
    totalMarks: number
  }[] | undefined;

  constructor(
    private dialogRef: MatDialogRef<RankListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.rankList = data;
  }

  close() {
    this.dialogRef.close();
  }

}
