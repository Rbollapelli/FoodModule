import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustOrderDetailsCompComponent } from 'src/admin/cust-order-details-comp/cust-order-details-comp.component';
import { ProductComponent } from 'src/admin/product/product.component';
import { CartlistComponent } from 'src/customer/cartlist/cartlist.component';
import { CustomerHomeComponent } from 'src/customer/customer/customer-home.component';
import { AdminHomeComponent } from 'src/admin/admin-home/admin-home.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CustComponent } from './cust/cust.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"admin-home",component:AdminHomeComponent},
  {path:"product",component:ProductComponent},
  {path:"cust-order-details-comp",component:CustOrderDetailsCompComponent},
  {path:"cartlist",component:CartlistComponent},
  {path:"customer-home",component:CustomerHomeComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"sign-up",component:SignUpComponent},
  {path:"cust",component:CustComponent},
  {path:"cust-details",component:CartDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
