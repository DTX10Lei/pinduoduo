import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { MyRoutingModule } from './my-routing.module';


@NgModule({
  declarations: [],
  imports: [
    ShareModule,
    MyRoutingModule
  ]
})
export class MyModule { }
