import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankListDialogComponent } from './rank-list-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    RankListDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    RankListDialogComponent
  ]
})
export class RankListDialogModule { }
