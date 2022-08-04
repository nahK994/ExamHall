import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelTestDetailsComponent } from './model-test-details.component';
import { ModelTestDetailsRoutingModule } from './model-test-details-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QuestionPaperModule } from 'src/app/shared/question-paper/question-paper.module';
import { ModelTestDetailsService } from './model-test-details.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ModelTestDetailsComponent
  ],
  imports: [
    CommonModule,
    ModelTestDetailsRoutingModule,
    MatButtonModule,
    MatIconModule,
    QuestionPaperModule,
    HttpClientModule
  ],
  providers:[
    ModelTestDetailsService
  ]
})
export class ModelTestDetailsModule { }
