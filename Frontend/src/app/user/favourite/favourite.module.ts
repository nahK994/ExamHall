import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteComponent } from './favourite.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FavouriteRoutingModule } from './favourite-routing.module';
import { QuestionModule } from 'src/app/shared/question/question.module';



@NgModule({
  declarations: [
    FavouriteComponent
  ],
  imports: [
    CommonModule,
    FavouriteRoutingModule,
    MatButtonModule,
    MatIconModule,
    QuestionModule
  ]
})
export class FavouriteModule { }
