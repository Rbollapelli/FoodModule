

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { Observable } from 'rxjs';

import { BehaviorSubject } from 'rxjs';
import { ProductForm } from './model/product';
import { UserForm } from './model/user';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public username: any = '';
  public cartIteamList: any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor(public http: HttpClient) {
  }
  Save(product: ProductForm) {
    console.log(product);
    return this.http.post<ProductForm>("http://localhost:3000/productDetails", product).pipe(map((res: any) => {
      return res;
    }));
  }
  GetData(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/productDetails");
  }

  getDelete(product: ProductForm) {
    console.log("Service delete method ")
    return this.http.delete<any>("http://localhost:3000/productDetails/" + product.id);
  }
  GetEditProductData(product: ProductForm): Observable<any> {
    return this.http.get<ProductForm>("http://localhost:3000/productDetails/" + product.id);
  }

  updateProductDetails(product: ProductForm) {
    console.log("Calling update ====>ID=" + product.id);
    return this.http.put<ProductForm>("http://localhost:3000/productDetails/" + product.id, product).pipe(map((res: any) => {
      return res;
    }));
  }

  getCustOrderDetails() {
    return this.http.get<any>("http://localhost:3000/CustOrderDetails");
  }

  getUserDetails() {

    return this.http.get<any>("http://localhost:3000/UserDetails");

  }
  private cartUpdates = new Subject<string>();
  public cartUpdates$ = this.cartUpdates.asObservable();

  public cartItmes: ProductForm[] = [];
  public get count(): number {
    return this.cartItmes.reduce((c, t1) => t1.qty + c, 0);
  };


  addcart(product: ProductForm) {

    let item: ProductForm = this.cartItmes.find(item => item.id == product.id) as ProductForm;

    if (item) { item.qty++ } else {
      (product as ProductForm).qty = 1;
      this.cartItmes.push(product)
    }
  }

  setproductany(product: any) {
    this.cartIteamList.push(...product);
    this.productList.next(product);
  }

  addtoProductcart(product: any) {
    this.cartIteamList.push(product);
    this.productList.next(this.cartIteamList);
    this.getTotalPrice();
    console.log(this.cartIteamList)
  }
  getTotalPrice() {
    let grandtotal = 0;

  }

  removeCartitem(product: any) {
  }
  getUserDetailsVal(user: UserForm) {
    return this.http.get<UserForm[]>("http://localhost:3000/UserDetails?username=" + user.username);
  }

  registerUser(userForm: UserForm) {
    return this.http.post<UserForm>("http://localhost:3000/UserDetails", userForm).pipe(map((res: any) => {
      return res;
    }));
  }

  addUserData(username: string) {

    this.username = username;

  }
  getaddedusername() {

    return this.username;

  }

  getUserDetailsfinal(username: string) {

    return this.http.get<UserForm>("http://localhost:3000/UserDetails?username=" + username);

  }

  updateUserFormDetails(useform: UserForm) {

    console.log("Calling update ====>ID=" + useform.id);

    return this.http.put<any>("http://localhost:3000/UserDetails/" + useform.id, useform).pipe(map((res: any) => {

      return res;

    }));

  }
}
