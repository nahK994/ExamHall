import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ExamDetailsComponent } from './exam-details/exam-details.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AdminService } from './admin.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AccessTokenInterceptor } from '../interceptor/token.interceptor';
import { PageContainerModule } from '../shared/page-container/page-container.module';
import { RankListDialogModule } from '../shared/rank-list-dialog/rank-list-dialog.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { QuestionSelectorModule } from '../shared/question-selector/question-selector.module';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { QuestionModule } from '../shared/question/question.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    HomeComponent,
    ExamDetailsComponent,
    CreateExamComponent,
    CreateSubjectComponent,
    CreateQuestionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    PageContainerModule,
    RankListDialogModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    QuestionSelectorModule,
    MatIconModule,
    QuestionModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccessTokenInterceptor,
      multi: true
    },
    AdminService,
    MatDatepickerModule
  ]
})
export class AdminModule { }
