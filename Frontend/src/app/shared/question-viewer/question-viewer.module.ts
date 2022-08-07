import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionViewerComponent } from './question-viewer.component';
import { ExplanationModalComponent } from './explanation-modal/explanation-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    QuestionViewerComponent,
    ExplanationModalComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    QuestionViewerComponent
  ]
})
export class QuestionViewerModule { }
