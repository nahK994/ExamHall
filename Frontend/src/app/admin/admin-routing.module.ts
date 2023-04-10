import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamDetailsComponent } from './exam-details/exam-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'exam-details/:id',
        component: ExamDetailsComponent
    },
    {
        path: 'create-exam',
        loadChildren: () => import('./create-exam/create-exam.module').then(m=>m.CreateExamModule)
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
