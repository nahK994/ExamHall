import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelTestComponent } from './model-test.component';


const routes: Routes = [
  {
    path: '',
    component: ModelTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelTestRoutingModule { }
