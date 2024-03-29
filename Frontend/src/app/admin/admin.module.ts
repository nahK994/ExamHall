import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamDetailsComponent } from './exam-details/exam-details.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatButtonModule } from '@angular/material/button';
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
import { CreateExamComponent } from './create-exam/create-exam.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { QuestionModule } from '../shared/question/question.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { QuestionListModule } from '../shared/question-list/question-list.module';
import {MatRippleModule} from '@angular/material/core';
import { QuestionSelectorComponent } from './create-exam/question-selector/question-selector.component';
import { MatIconModule } from '@angular/material/icon';
import { QuestionBankDetailsComponent } from './question-bank-details/question-bank-details.component';
import { ExamOverviewComponent } from './exam-overview/exam-overview.component';
import { QuestionOverviewComponent } from './question-overview/question-overview.component';
import { QuestionBankOverviewComponent } from './question-bank-overview/question-bank-overview.component';


@NgModule({
  declarations: [
    ExamDetailsComponent,
    CreateExamComponent,
    CreateQuestionComponent,
    QuestionSelectorComponent,
    QuestionBankDetailsComponent,
    ExamOverviewComponent,
    QuestionOverviewComponent,
    QuestionBankOverviewComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    PageContainerModule,
    RankListDialogModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    QuestionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    QuestionListModule,
    MatRippleModule,
    MatIconModule
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
