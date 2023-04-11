import { Component } from '@angular/core';
import { CartService } from '../cartservice.service';
import { CartModelForm } from '../model/cartmodel';
import { UserForm } from '../model/user';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent {

  userForm1!: UserForm[];
  public product!: any[];
  public productlist!: any[];
  public grandtotal: number = 0;
  public totalIteam: number = 0;
  public btnflag: string = 'false';
  finalUser!: UserForm;
  public username!: string;
  constructor(private ser: ServiceService, private cartservice: CartService) {
    this.cartservice
  }

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe(res => {
      console.log("====>Cart Details" + res);
      this.totalIteam = res.length;
      this.productlist = res;
      console.log(this.productlist);
    });

    this.productlist.forEach((data) => {
      this.grandtotal += Number(data.price);

    })
    this.username = this.ser.getaddedusername();

    console.log("userName" + this.username);

    this.ser.getUserDetails().subscribe((data) => {

      this.userForm1 = data;



    });

  }

  getcartList() {
    this.cartservice.getProducts().subscribe((data) => {
      console.log(data);
      this.product = data;
    });
  }

  submitOrderDetails(orderDetails: any[]) {

    orderDetails.forEach((data) => {

      console.log(data.productname + "==>" + data.price);


    })
    let a: number = this.grandtotal
    const now = new Date();

    this.userForm1.forEach((d => {

      if (this.username == d.username) {

        this.finalUser = d;

        console.log(d.usertype);

      }

    }));

    let mbl: number = this.finalUser.mobilenumber;
    let cdata = new CartModelForm(this.finalUser.username, this.finalUser.address, mbl, this.finalUser.email, a, now.toString());
    this.cartservice.SaveCartDetails(cdata).subscribe();

    console.log("order details placed:" + orderDetails);

    this.btnflag = 'true';

  }


}
