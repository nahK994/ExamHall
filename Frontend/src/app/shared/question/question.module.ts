import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    QuestionComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    QuestionComponent
  ]
})
export class QuestionModule { }
