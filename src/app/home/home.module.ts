import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [],
  imports: [
    ShareModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
