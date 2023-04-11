import { Component } from '@angular/core';
import { CartService } from '../cartservice.service';
import { ProductForm } from '../model/product';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cust',
  templateUrl: './cust.component.html',
  styleUrls: ['./cust.component.css']
})
export class CustComponent {
  
  selectedCatList !:ProductForm[];
  product!:ProductForm[];
  product21!:ProductForm[];
  product1!:ProductForm[];
  cartProductList = [];
  constructor(private ser:ServiceService,private cartService:CartService) {
  
    }

    ngOnInit():void{
      this.ser.GetData().subscribe((data)=>{
        this.product=data;
        console.log("Product detaila"+this.product)
        this.product.forEach((a:any)=>{
          Object.assign(a,{quantity:1,total:a.price})
          console.log(a.productname)
        });
        });   
        
       
    }
    public cartItmes:ProductForm[] =[];
    public get count():number{
      return this.cartItmes.reduce((c,t1) => t1.qty+c,0);
      
    };
     
 

  addProductToCart(product:ProductForm) {
    console.log("====>product"+product.productname)
    this.cartService.addtoProductcart(product);
  }

  
  editProduct!:ProductForm;
  editProductDetails(product:ProductForm){
    this.ser.GetEditProductData(product).subscribe((data)=>{
      this.editProduct=data;
      });
  }

}
