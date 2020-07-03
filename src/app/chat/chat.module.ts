import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';

import { ChatRoutingModule } from './chat-routing.module';


@NgModule({
  declarations: [],
  imports: [
    ShareModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
