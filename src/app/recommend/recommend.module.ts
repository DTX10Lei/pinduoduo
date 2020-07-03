import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';


import { RecommendRoutingModule } from './recommend-routing.module';


@NgModule({
  declarations: [],
  imports: [
    ShareModule,
    RecommendRoutingModule
  ]
})
export class RecommendModule { }
