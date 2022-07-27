import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ExplanationModalComponent } from './explanation-modal/explanation-modal.component';



@NgModule({
  declarations: [
    QuestionComponent,
    ExplanationModalComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    QuestionComponent
  ]
})
export class QuestionModule { }
