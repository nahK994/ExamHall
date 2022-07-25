import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelTestComponent } from './model-test.component';
import { ModelTestRoutingModule } from './model-test-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ModelTestComponent
  ],
  imports: [
    CommonModule,
    ModelTestRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ModelTestModule { }
