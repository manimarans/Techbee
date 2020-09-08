import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashoardComponent } from './views/dashoard/dashoard.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { UserManageComponent } from './views/user-manage/user-manage.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashoardComponent
  },
  {
    path: 'user-management',
    component: UserManageComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
