import { Subject } from 'rxjs';


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { CustOrderDetailsForm } from 'src/app/model/CustOrderDetails';
@Component({
  selector: 'app-cust-order-details-comp',
  templateUrl: './cust-order-details-comp.component.html',
  styleUrls: ['./cust-order-details-comp.component.css']
})
export class CustOrderDetailsCompComponent {
  custorder!:CustOrderDetailsForm[];
  subject$ = new Subject();
  constructor(private ser:ServiceService)
  {
  
  }
  ngOnInit():void{
    console.log("calling cutomer details")
    this.ser.getCustOrderDetails().subscribe((data1)=>{
      this.custorder=data1;
    });
  }
}
