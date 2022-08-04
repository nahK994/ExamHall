import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelTestComponent } from './model-test.component';
import { ModelTestRoutingModule } from './model-test-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ModelTestService } from './model-test.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ModelTestComponent
  ],
  imports: [
    CommonModule,
    ModelTestRoutingModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [
    ModelTestService
  ]
})
export class ModelTestModule { }
