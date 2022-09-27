import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExamComponent } from './create-exam.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { CreateTopicComponent } from './create-topic/create-topic.component';


const routes: Routes = [
  {
    path: '',
    component: CreateExamComponent
  },
  {
    path: 'create-topic',
    component: CreateTopicComponent
  },
  {
    path: 'create-question',
    component: CreateQuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateExamRoutingModule { }
