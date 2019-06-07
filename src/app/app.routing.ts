import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'chat-demo', loadChildren :'./angular-chat-demo/chat-demo.module#ChatDemoModule' },
    { path: 'route-demo', loadChildren :'./angular-route-demo/route-demo.module#RouteDemoModule' },
    { path: 'rxjs-demo', loadChildren :'./angular-rxjs-demo/rxjs-demo.module#RxjsDemoModule' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }