import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
