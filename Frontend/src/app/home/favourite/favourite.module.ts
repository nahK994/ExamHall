import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteComponent } from './favourite.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FavouriteRoutingModule } from './favourite-routing.module';
import { QuestionModule } from 'src/app/shared/question/question.module';
import { HttpClientModule } from '@angular/common/http';
import { FavouriteService } from './favourite.service';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    FavouriteComponent
  ],
  imports: [
    CommonModule,
    FavouriteRoutingModule,
    MatButtonModule,
    MatIconModule,
    QuestionModule,
    HttpClientModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [
    FavouriteService
  ]
})
export class FavouriteModule { }