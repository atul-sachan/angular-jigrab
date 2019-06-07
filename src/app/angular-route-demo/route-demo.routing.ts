import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RouteDemoComponent } from './route-demo.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { NewsComponent } from './news/news.component';
import { SociatyComponent } from './sociaty/sociaty.component';
import { HotnewsComponent } from './hotnews/hotnews.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from "./service/auth-guard.service";

const routeDemoRoutes: Routes = [
    { path: 'e1', component: RouteDemoComponent, children:[
      { path: '', component: WelcomeComponent },
      { path: 'home', loadChildren :'./home/home.module#HomeModule' },
      { path: 'news', component: NewsComponent, children : [
        {path: 'sociaty', component: SociatyComponent},
        {path: 'hotnews', component: HotnewsComponent},
        {path: '**', component: SociatyComponent},
      ]},
      { path: 'admin', component: AdminComponent, canActivate :[AuthGuardService], canDeactivate:[AuthGuardService] },
      { path: 'news/:nid', component: NewsComponent },
      { path: 'chat', component: ChatComponent, outlet: 'auxi' },
      { path: 'login', component: LoginComponent }
    ]
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routeDemoRoutes)],
    exports: [RouterModule]
})
export class RouteDemoRoutingModule { }