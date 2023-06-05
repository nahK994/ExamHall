import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccessTokenInterceptor } from '../interceptor/token.interceptor';
import { QuestionBanksService } from './question-banks.service';
import { QuestionBanksComponent } from './question-banks.component';
import { QuestionBanksDetailsComponent } from './question-banks-details/question-banks-details.component';
import { QuestionBanksRoutingModule } from './question-banks-routing.module';


@NgModule({
  declarations: [
    QuestionBanksComponent,
    QuestionBanksDetailsComponent
  ],
  imports: [
    CommonModule,
    QuestionBanksRoutingModule
  ],
  providers: [
    QuestionBanksService
  ],
})
export class QuestionBanksModule { }
