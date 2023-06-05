import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionBanksComponent } from './question-banks.component';
import { QuestionBanksDetailsComponent } from './question-banks-details/question-banks-details.component';
import { QuestionBanksRoutingModule } from './question-banks-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { QuestionModule } from '../shared/question/question.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    QuestionBanksComponent,
    QuestionBanksDetailsComponent
  ],
  imports: [
    CommonModule,
    QuestionBanksRoutingModule,
    MatButtonModule,
    QuestionModule,
    MatIconModule
  ]
})
export class QuestionBanksModule { }
