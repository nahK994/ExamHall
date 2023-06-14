import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobSolutionsComponent } from './job-solutions.component';

const routes: Routes = [
    {
      path: '',
      component: JobSolutionsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSolutionsRoutingModule { }
