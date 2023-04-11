
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ProductForm } from 'src/app/model/product';


import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product!:ProductForm[];
  editProduct!:ProductForm;
  productForm!:FormGroup;
  updateproductForm!:FormGroup;
  namepattern="^[a-zA-z ]{2,15}$";
  subject$ = new Subject();
  currencypattern= /^\d+(?:\.\d{0,2})$/;
  constructor(private fb:FormBuilder,private ser:ServiceService)
    {
  
    }
   
    ngOnInit():void{
      this.productForm=this.fb.group({
        productname:['',[Validators.required,Validators.pattern(this.namepattern)]],
        productcategory:['',[Validators.required,Validators.pattern(this.namepattern)]],
        price:['',[Validators.required],Validators.pattern(this.currencypattern)],
        listind:['',[Validators.required]],
        id:['',[Validators.required]]
              });  
              this.updateproductForm=this.fb.group({
                productname:['',[Validators.required,Validators.pattern(this.namepattern)]],
                productcategory:['',[Validators.required,Validators.pattern(this.namepattern)]],
                price:['',[Validators.required]],
                listind:['',[Validators.required]],
                id:['',[Validators.required]]
                      });  
              this.ser.GetData().subscribe((data)=>{
                this.product=data;
                });   
     }
     saveProduct()
    {
      {
        console.log(this.productForm.value);
        this.ser.Save(this.productForm.value).subscribe();
        window.location.reload();
        }
    }
    getProductDetails(){
      this.ser.GetData().subscribe((data)=>{
        this.product=data;
        });
    }
    deleteProduct(product:ProductForm){
      console.log(product.id)
      this.ser.getDelete(product).subscribe((data)=>{
        this.product=data;
        window.location.reload();
        });
    }
   
    editProductDetails(product:ProductForm){
      this.ser.GetEditProductData(product).subscribe((data)=>{
        this.editProduct=data;
        });
    }

    updateProductDetailsForm(){
      console.log("=====Update Opeartion ======>"+this.updateproductForm.value)
      this.ser.updateProductDetails(this.updateproductForm.value).subscribe();
      window.location.reload();
    }

    
}
