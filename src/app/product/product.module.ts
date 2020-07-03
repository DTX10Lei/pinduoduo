import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  declarations: [],
  imports: [
    ShareModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
