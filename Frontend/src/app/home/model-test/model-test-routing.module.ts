import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelTestComponent } from './model-test.component';


const routes: Routes = [
  {
    path: '',
    component: ModelTestComponent
  },
  {
    path: ':examId',
    loadChildren: () => import('./model-test-details/model-test-details.module').then(m => m.ModelTestDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelTestRoutingModule { }
