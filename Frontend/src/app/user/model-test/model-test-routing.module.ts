import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelTestDetailsComponent } from './model-test-details/model-test-details.component';
import { ModelTestComponent } from './model-test.component';


const routes: Routes = [
  {
    path: '',
    component: ModelTestComponent
  },
  {
    path: 'exam/:examId',
    component: ModelTestDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelTestRoutingModule { }
