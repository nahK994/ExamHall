import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelTestDetailsComponent } from './model-test-details.component';


const routes: Routes = [
  {
    path: '',
    component: ModelTestDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelTestDetailsRoutingModule { }
