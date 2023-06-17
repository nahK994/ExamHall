import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path: '',
    loadChildren: () => import('./public-page/public-page.module').then(m=>m.PublicPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
