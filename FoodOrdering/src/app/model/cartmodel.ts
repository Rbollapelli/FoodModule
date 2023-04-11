import { last } from "rxjs";

export class CartModelForm
{
    customername:string;
    address:string;
    phone:number;
    email:string;
    totalOrderPrice:number;
    date:string;
    id!:number;
    constructor(customername:string,address:string,phone:number,email:string,totalOrderPrice:number,date:string){
this.date=date;
this.totalOrderPrice=totalOrderPrice;
this.email=email;
this.phone=phone;
this.customername=customername;
this.address=address;
    }

}