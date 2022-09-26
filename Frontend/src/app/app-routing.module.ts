import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./user/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./user/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'home/:userId',
    loadChildren: () => import('./user/home/home.module').then(m=>m.HomeModule)
  },
  {
    path: 'admin/login',
    loadChildren: () => import('./admin/login/login.module').then(m=>m.LoginModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/home/home.module').then(m=>m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
