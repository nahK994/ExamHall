import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m=>m.AdminModule)
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
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path: 'question-banks',
    loadChildren: () => import('./question-banks/question-banks.module').then(m=>m.QuestionBanksModule)
  },
  {
    path: 'job-solutions',
    loadChildren: () => import('./job-solutions/job-solutions.module').then(m=>m.JobSolutionsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
