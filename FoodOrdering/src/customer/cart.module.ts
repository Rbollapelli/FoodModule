import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartlistComponent } from './cartlist/cartlist.component';
import { CustomerComponent } from './customer/customer.component';



@NgModule({
  declarations: [
    CartlistComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
