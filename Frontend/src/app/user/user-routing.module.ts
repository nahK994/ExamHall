import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivedQuestionListComponent } from './archived-question-list/archived-question-list.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ModelTestDetailsComponent } from './model-test-details/model-test-details.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'exam-list',
    },
    {
        path: 'exam-list',
        component: ExamListComponent
    },
    {
        path: 'archived-question-list',
        component: ArchivedQuestionListComponent
    },
    {
        path: 'result-list',
        component: ResultListComponent
    },
    {
        path: 'exam/:examId',
        component: ModelTestDetailsComponent
    },
    {
        path: 'result/:examId',
        component: ResultComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
