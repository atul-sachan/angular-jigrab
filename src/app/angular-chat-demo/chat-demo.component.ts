import {Component, OnInit} from '@angular/core';
import {ChatService} from './chat.service';

import * as moment from 'moment';
import { distinctUntilChanged, filter, skipWhile, scan, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-chat-demo',
  templateUrl: './chat-demo.component.html',
  styleUrls: ['./chat-demo.component.css']
})
export class ChatDemoComponent implements OnInit {
  message: string;
  messages: string[] = [];
  secretCode: string;

  constructor(private chatService: ChatService) {
    this.secretCode = 'DONT TELL';
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.chatService
      .getMessages()
      .pipe(distinctUntilChanged(),
      filter((message: string) => message.trim().length > 0),
      throttleTime(1000),
      skipWhile((message) => message !== this.secretCode),
      scan((acc: string, message: string, index: number) =>`${message}(${index + 1})` ,""))
      .subscribe((message: string) => {
        const currentTime = moment().format('hh:mm:ss a');
        const messageWithTimestamp = `${currentTime}: ${message}`;
        this.messages.push(messageWithTimestamp);
      });
  }
}