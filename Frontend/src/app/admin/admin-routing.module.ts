import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { ExamDetailsComponent } from './exam-details/exam-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'exam-details/:id',
        component: ExamDetailsComponent
    },
    {
        path: 'create-exam',
        component: CreateExamComponent
    },
    {
        path: 'create-question',
        component: CreateQuestionComponent
    },
    {
        path: 'create-subject',
        component: CreateSubjectComponent
    },
    {
        path: 'update-question/:id',
        component: CreateQuestionComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
