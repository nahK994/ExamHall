import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateExamComponent } from './create-exam.component';
import { CreateTopicComponent } from './create-topic/create-topic.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { CreateExamRoutingModule } from './create-exam-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateExamService } from './create-exam.service';
import { MatSelectModule } from '@angular/material/select';
import { QuestionSelectorModule } from 'src/app/shared/question-selector/question-selector.module';
import { AccessTokenInterceptor } from '../../interceptor/token.interceptor';
import { PageContainerModule } from 'src/app/shared/page-container/page-container.module';



@NgModule({
  declarations: [
    CreateExamComponent,
    CreateTopicComponent,
    CreateQuestionComponent
  ],
  imports: [
    CommonModule,
    CreateExamRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    QuestionSelectorModule,
    MatCardModule,
    PageContainerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccessTokenInterceptor,
      multi: true
    },
    CreateExamService
  ]
})
export class CreateExamModule { }
