import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicPageComponent } from './public-page.component';
import { PublicPageRoutingModule } from './public-page-routing.module';
import { JobSolutionsComponent } from './job-solutions/job-solutions.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PublicPageService } from './public-page.service';
import { QuestionModule } from '../shared/question/question.module';
import { MatCardModule } from '@angular/material/card';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { PageContainerModule } from '../shared/page-container/page-container.module';
import { MatInputModule } from '@angular/material/input';
import { QuestionBanksDetailsComponent } from './question-banks-details/question-banks-details.component';
import { QuestionBanksComponent } from './question-banks/question-banks.component';



@NgModule({
  declarations: [
    PublicPageComponent,
    JobSolutionsComponent,
    RegistrationComponent,
    LoginComponent,
    QuestionBanksDetailsComponent,
    QuestionBanksComponent
  ],
  imports: [
    CommonModule,
    PublicPageRoutingModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    QuestionModule,
    MatCardModule,
    FormsModule,
    PageContainerModule,
    MatInputModule
  ],
  providers: [
    PublicPageService
  ]
})
export class PublicPageModule { }
