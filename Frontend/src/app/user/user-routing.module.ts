import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModelTestDetailsComponent } from './model-test-details/model-test-details.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
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
