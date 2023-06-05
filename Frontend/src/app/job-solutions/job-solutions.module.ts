import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobSolutionsComponent } from './job-solutions.component';
import { JobSolutionsDetailsComponent } from './job-solutions-details/job-solutions-details.component';
import { JobSolutionsRoutingModule } from './job-solutions-routing.module';
import { JobSolutionsService } from './job-solutions.service';


@NgModule({
  declarations: [
    JobSolutionsComponent,
    JobSolutionsDetailsComponent
  ],
  imports: [
    CommonModule,
    JobSolutionsRoutingModule
  ],
  providers: [
    JobSolutionsService
  ]
})
export class JobSolutionsModule { }
