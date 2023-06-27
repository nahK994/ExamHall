import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplanationModalComponent } from './explanation-modal/explanation-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { QuestionComponent } from './question.component';
import { MathjaxComponent } from './mathjax/mathjax.component';
import { QuestionService } from './question.service';



@NgModule({
  declarations: [
    QuestionComponent,
    ExplanationModalComponent,
    MathjaxComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    QuestionComponent
  ],
  providers: [
    QuestionService
  ]
})
export class QuestionModule { }
