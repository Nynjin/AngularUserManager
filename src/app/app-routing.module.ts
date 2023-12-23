import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-list/user-details/user-details.component';
import { UserUpdateComponent } from './user-list/user-update/user-update.component';
import { UserAddComponent } from './user-list/user-add/user-add.component';

const routes: Routes = [
  { path: 'home', component: UserListComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'user-update/:id', component: UserUpdateComponent },
  { path: 'user-add', component: UserAddComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
