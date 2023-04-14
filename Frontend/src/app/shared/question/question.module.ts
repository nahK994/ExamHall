import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplanationModalComponent } from './explanation-modal/explanation-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { QuestionComponent } from './question.component';



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
