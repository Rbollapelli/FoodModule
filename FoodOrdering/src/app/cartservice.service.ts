import { ProductForm } from './model/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject, Observable } from 'rxjs';


import { BehaviorSubject } from 'rxjs';
import { CartModelForm } from './model/cartmodel';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartIteamList: any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor(public http: HttpClient) {

  }
  getProducts() {
    console.log(this.productList)
    return this.productList.asObservable();
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

  getCartlist() {
    return this.cartIteamList.Observable();
  }

  getTotalPrice() {
    let grandtotal = 0;
    this.cartIteamList.map((a: any) => {
      grandtotal = +a.total;
    })
  }

  removeCartIteam(product: any) {
    this.cartIteamList.map((a: any, index: any) => {
      this.productList.next(this.cartIteamList);
    })

  }
  SaveCartDetails(cartForm: CartModelForm) {

    console.log(cartForm);

    return this.http.post<CartModelForm>("http://localhost:3000/CustOrderDetails", cartForm).pipe(map((res: CartModelForm) => {

      return res;

    }));

  }

}