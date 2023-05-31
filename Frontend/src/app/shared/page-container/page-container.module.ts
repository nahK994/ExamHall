import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './page-container.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [
    PageContainerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatRippleModule
  ],
  exports: [
    PageContainerComponent
  ]
})
export class PageContainerModule { }
