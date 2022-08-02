import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionPaperComponent } from './question-paper.component';
import { QuestionItemComponent } from './question-item/question-item.component';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    QuestionPaperComponent,
    QuestionItemComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    QuestionPaperComponent,
  ]
})
export class QuestionPaperModule { }
