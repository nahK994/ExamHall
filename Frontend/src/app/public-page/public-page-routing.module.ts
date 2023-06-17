import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobSolutionsComponent } from './job-solutions/job-solutions.component';
import { LoginComponent } from './login/login.component';
import { PublicPageComponent } from './public-page.component';
import { QuestionBanksDetailsComponent } from './question-banks-details/question-banks-details.component';
import { QuestionBanksComponent } from './question-banks/question-banks.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: PublicPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'question-banks/:id',
    component: QuestionBanksDetailsComponent
  },
  {
    path: 'question-banks',
    component: QuestionBanksComponent
  },
  {
    path: 'job-solutions',
    component: JobSolutionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicPageRoutingModule { }
