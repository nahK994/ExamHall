import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionSelectorComponent } from './question-selector.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { QuestionModule } from '../question/question.module';


@NgModule({
  declarations: [
    QuestionSelectorComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    QuestionModule
  ]
})
export class QuestionSelectorModule { }
