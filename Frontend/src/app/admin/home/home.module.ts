import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { MatButtonModule } from '@angular/material/button';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ExamDetailsPageComponent } from './exam-details-page/exam-details-page.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HomeComponent,
    ExamDetailsPageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    HomeRoutingModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
