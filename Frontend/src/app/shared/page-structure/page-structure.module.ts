import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageStructureComponent } from './page-structure.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    PageStructureComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    PageStructureComponent
  ]
})
export class PageStructureModule { }
