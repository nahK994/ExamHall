import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionPaperComponent } from './question-paper.component';
import { QuestionItemComponent } from './question-item/question-item.component';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { QuestionPaperService } from './question-paper.service';


@NgModule({
  declarations: [
    QuestionPaperComponent,
    QuestionItemComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule
  ],
  exports: [
    QuestionPaperComponent,
  ],
  providers: [
    QuestionPaperService
  ]
})
export class QuestionPaperModule { }
