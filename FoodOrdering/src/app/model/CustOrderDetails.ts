import { last } from "rxjs";

export class CustOrderDetailsForm

{
    id!:number;
    customername!:string;
    address!:string;
    phone!:number;
    email!:string;
    totalOrderPrice!:number
    date!:Date;

    constructor(id:number,customername:string,address:string,phone:number,email:string,totalOrderPrice:number,date:Date){
        this.id=id;
        this.customername=customername;
        this.address=address;
        this.phone=phone;
        this.email=email;
        this.totalOrderPrice=totalOrderPrice;
        this.date=date;
    }
}