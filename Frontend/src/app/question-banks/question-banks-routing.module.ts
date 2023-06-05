import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionBanksDetailsComponent } from './question-banks-details/question-banks-details.component';
import { QuestionBanksComponent } from './question-banks.component';

const routes: Routes = [
    {
      path: '',
      component: QuestionBanksComponent
    },
    {
      path: ':id',
      component: QuestionBanksDetailsComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionBanksRoutingModule { }
