import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ChatDemoComponent } from './chat-demo.component';

const chatDemoRoutes: Routes = [
    { path: '', component: ChatDemoComponent },
];

@NgModule({
    imports: [RouterModule.forChild(chatDemoRoutes)],
    exports: [RouterModule]
})
export class ChatDemoRoutingModule { }