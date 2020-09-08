import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManageRoutingModule } from './user-manage-routing.module';
import { UserManageComponent } from './user-manage.component';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [UserManageComponent, CardMenuComponent, UserItemComponent],
  imports: [
    CommonModule,
    UserManageRoutingModule,
    SharedModule
  ]
})
export class UserManageModule { }
