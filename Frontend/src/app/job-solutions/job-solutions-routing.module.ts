import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobSolutionsDetailsComponent } from './job-solutions-details/job-solutions-details.component';
import { JobSolutionsComponent } from './job-solutions.component';

const routes: Routes = [
    {
      path: '',
      component: JobSolutionsComponent
    },
    {
      path: ':id',
      component: JobSolutionsDetailsComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSolutionsRoutingModule { }
