import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionSelectorComponent } from './question-selector.component';
import { QuestionViewerModule } from '../question-viewer/question-viewer.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    QuestionSelectorComponent
  ],
  imports: [
    CommonModule,
    QuestionViewerModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    QuestionSelectorComponent
  ]
})
export class QuestionSelectorModule { }