import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'model-tests',
    loadChildren: () => import('./model-test/model-test.module').then(m => m.ModelTestModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./favourite/favourite.module').then(m => m.FavouriteModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
