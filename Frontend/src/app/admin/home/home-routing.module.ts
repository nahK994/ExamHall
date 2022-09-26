import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamDetailsPageComponent } from './exam-details-page/exam-details-page.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'create-exam',
    loadChildren: () => import('./create-exam/create-exam.module').then(m=>m.CreateExamModule)
  },
  {
    path: 'exam-details/:id',
    component: ExamDetailsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
