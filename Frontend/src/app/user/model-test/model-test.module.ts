import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelTestComponent } from './model-test.component';
import { ModelTestRoutingModule } from './model-test-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ModelTestService } from './model-test.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModelTestDetailsComponent } from './model-test-details/model-test-details.component';
import { QuestionPaperModule } from '../../shared/question-paper/question-paper.module';
import { AccessTokenInterceptor } from '../../interceptor/token.interceptor';
import { PageStructureModule } from 'src/app/shared/page-structure/page-structure.module';



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
    QuestionPaperModule,
    PageStructureModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccessTokenInterceptor,
      multi: true
    },
    ModelTestService
  ]
})
export class ModelTestModule { }
