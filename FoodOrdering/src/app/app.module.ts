import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from 'src/admin/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustOrderDetailsCompComponent } from 'src/admin/cust-order-details-comp/cust-order-details-comp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminHomeComponent } from 'src/admin/admin-home/admin-home.component';
import { HomeComponent } from './home/home.component';
import { CustComponent } from './cust/cust.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AdminHomeComponent,
    CustOrderDetailsCompComponent,
    DashboardComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    CustComponent,
    CartDetailsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
