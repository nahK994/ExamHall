import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { UserRoutingModule } from './user-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { QuestionViewerModule } from '../shared/question-viewer/question-viewer.module';
import { FavouritesComponent } from './favourites/favourites.component';
import { UserService } from './user.service';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    FavouritesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    QuestionViewerModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
