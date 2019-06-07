import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChatDemoRoutingModule } from './chat-demo.routing';
import { ChatDemoComponent } from './chat-demo.component';
import { ChatService } from './chat.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChatDemoRoutingModule
  ],
  providers: [ChatService],
  declarations: [ChatDemoComponent]
})
export class ChatDemoModule { }