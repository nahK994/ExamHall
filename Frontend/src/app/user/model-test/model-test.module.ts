import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelTestComponent } from './model-test.component';
import { ModelTestRoutingModule } from './model-test-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ModelTestService } from './model-test.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModelTestDetailsComponent } from './model-test-details/model-test-details.component';
import { AccessTokenInterceptor } from '../../interceptor/token.interceptor';
import { PageContainerModule } from 'src/app/shared/page-container/page-container.module';
import { MatCardModule } from '@angular/material/card';
import { ExamPaperModule } from 'src/app/shared/exam-paper/exam-paper.module';
import { QuestionModule } from 'src/app/shared/question/question.module';



@NgModule({
  declarations: [
    ModelTestComponent,
    ModelTestDetailsComponent
  ],
  imports: [
    CommonModule,
    ModelTestRoutingModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    ExamPaperModule,
    PageContainerModule,
    MatCardModule,
    QuestionModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccessTokenInterceptor,
      multi: true
    },
    ModelTestService
  ]
})
export class ModelTestModule { }
