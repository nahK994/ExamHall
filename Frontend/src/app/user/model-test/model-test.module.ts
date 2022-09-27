import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelTestComponent } from './model-test.component';
import { ModelTestRoutingModule } from './model-test-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ModelTestService } from './model-test.service';
import { HttpClientModule } from '@angular/common/http';
import { ModelTestDetailsComponent } from './model-test-details/model-test-details.component';
import { QuestionPaperModule } from 'src/app/shared/question-paper/question-paper.module';



@NgModule({
  declarations: [
    ModelTestComponent,
    ModelTestDetailsComponent
  ],
  imports: [
    CommonModule,
    ModelTestRoutingModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    QuestionPaperModule
  ],
  providers: [
    ModelTestService
  ]
})
export class ModelTestModule { }
