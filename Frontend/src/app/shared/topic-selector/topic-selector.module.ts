import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicSelectorComponent } from './topic-selector.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    TopicSelectorComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    TopicSelectorComponent
  ]
})
export class TopicSelectorModule { }
