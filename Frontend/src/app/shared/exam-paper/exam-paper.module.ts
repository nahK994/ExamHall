import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamPaperComponent } from './exam-paper.component';
import { QuestionItemComponent } from './question-item/question-item.component';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ExamPaperService } from './exam-paper.service';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ExamPaperComponent,
    QuestionItemComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule
  ],
  exports: [
    ExamPaperComponent,
  ],
  providers: [
    ExamPaperService
  ]
})
export class ExamPaperModule { }
