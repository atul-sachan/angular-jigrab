import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouteDemoRoutingModule } from './route-demo.routing';

import { RouteDemoComponent } from './route-demo.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { NewsComponent } from './news/news.component';
import { SociatyComponent } from './sociaty/sociaty.component';
import { HotnewsComponent } from './hotnews/hotnews.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from "./service/auth-guard.service";
import { LoginService } from './service/login.service';
import { DialogService } from "./service/dialog.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouteDemoRoutingModule
  ],
  providers: [
    AuthGuardService,
    LoginService,
    DialogService
  ],
  declarations: [
    RouteDemoComponent,
    WelcomeComponent,
    LoginComponent,
    ChatComponent,
    NewsComponent,
    SociatyComponent,
    HotnewsComponent,
    AdminComponent
  ]
})
export class RouteDemoModule { }