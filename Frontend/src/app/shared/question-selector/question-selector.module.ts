import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionSelectorComponent } from './question-selector.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QuestionModule } from '../question/question.module';


@NgModule({
  declarations: [
    QuestionSelectorComponent
  ],
  imports: [
    CommonModule,
    QuestionModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    QuestionSelectorComponent
  ]
})
export class QuestionSelectorModule { }
