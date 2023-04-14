import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ExamDetailsComponent } from './exam-details/exam-details.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AdminService } from './admin.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AccessTokenInterceptor } from '../interceptor/token.interceptor';
import { PageContainerModule } from '../shared/page-container/page-container.module';
import { RankListDialogModule } from '../shared/rank-list-dialog/rank-list-dialog.module';



@NgModule({
  declarations: [
    HomeComponent,
    ExamDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    PageContainerModule,
    RankListDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccessTokenInterceptor,
      multi: true
    },
    AdminService
  ]
})
export class AdminModule { }
