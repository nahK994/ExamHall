import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobSolutionsComponent } from './job-solutions.component';
import { JobSolutionsRoutingModule } from './job-solutions-routing.module';
import { JobSolutionsService } from './job-solutions.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { QuestionModule } from '../shared/question/question.module';


@NgModule({
  declarations: [
    JobSolutionsComponent,
  ],
  imports: [
    CommonModule,
    JobSolutionsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    QuestionModule
  ],
  providers: [
    JobSolutionsService
  ]
})
export class JobSolutionsModule { }
