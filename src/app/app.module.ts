import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './views/login/login.module';
import { SharedModule } from './shared/shared/shared.module';
import { DashoardModule } from './views/dashoard/dashoard.module';
import { SignUpModule } from './views/sign-up/sign-up.module';
import { UserManageModule } from './views/user-manage/user-manage.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashoardModule,
    SignUpModule,
    UserManageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
