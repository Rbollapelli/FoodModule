import { last } from "rxjs";

export class ProductForm

{
    id!:number;
    productname!:string;
    productcategory!:string;
    price!:number;
    listind!:string;
    qty: number;
 
    constructor(id:number,productname:string,productcategory:string,price:number,listind:string,qty:number){
        this.id=id;
        this.productname=productname;
        this.productcategory=productcategory;
        this.price=price;
        this.listind=listind;
        this.qty=qty;
        

    }
}