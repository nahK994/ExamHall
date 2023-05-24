import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserRoutingModule } from './user-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from './user.service';
import { AccessTokenInterceptor } from '../interceptor/token.interceptor';
import { PageContainerModule } from '../shared/page-container/page-container.module';
import { QuestionModule } from '../shared/question/question.module';
import { MatTabsModule } from '@angular/material/tabs';
import { ExamPaperModule } from '../shared/exam-paper/exam-paper.module';
import { RankListDialogModule } from '../shared/rank-list-dialog/rank-list-dialog.module';
import { ModelTestDetailsComponent } from './model-test-details/model-test-details.component';
import { QuestionListModule } from '../shared/question-list/question-list.module';
import { MatRippleModule } from '@angular/material/core';
import { ResultComponent } from './result/result.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    HomeComponent,
    ModelTestDetailsComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    QuestionModule,
    PageContainerModule,
    MatTabsModule,
    ExamPaperModule,
    RankListDialogModule,
    QuestionListModule,
    MatRippleModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccessTokenInterceptor,
      multi: true
    },
    UserService
  ]
})
export class UserModule { }
