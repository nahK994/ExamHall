import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { ExamDetailsComponent } from './exam-details/exam-details.component';
import { ExamOverviewComponent } from './exam-overview/exam-overview.component';
import { QuestionBankDetailsComponent } from './question-bank-details/question-bank-details.component';
import { QuestionBankOverviewComponent } from './question-bank-overview/question-bank-overview.component';
import { QuestionOverviewComponent } from './question-overview/question-overview.component';
import { SubjectOverviewComponent } from './subject-overview/subject-overview.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'exam-overview',
    },
    {
        path: 'question-bank-overview',
        component: QuestionBankOverviewComponent
    },
    {
        path: 'exam-overview',
        component: ExamOverviewComponent
    },
    {
        path: 'question-overview',
        component: QuestionOverviewComponent
    },
    {
        path: 'subject-overview',
        component: SubjectOverviewComponent
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
    },
    {
        path: 'question-bank/:id',
        component: QuestionBankDetailsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
