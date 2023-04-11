import { UserForm } from './../model/user';


import { Route, Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { ServiceService } from '../service.service';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userdetails!:UserForm[];
  loginForm!:FormGroup;
  updateuserdetails!:UserForm;  
  public username!:string;
  public updateflag='false';
  constructor(private fb:FormBuilder,private ser:ServiceService,
    private router: Router,private userService:UserService)
  {
  
  }
  ngOnInit():void{
    this.ser.getUserDetails().subscribe((data)=>{
      this.userdetails=data;
      }); 

      this.username= this.ser.getaddedusername();
      this.loginForm=this.fb.group({
        id:['',[Validators.required]],
        username:['',[Validators.required]],
        password:['',[Validators.required]],
        firstName:['',[Validators.required]],
        lastName:['',[Validators.required]],
        usertype:['',[Validators.required]],
        authdata:['',[Validators.required]],
        address:['',[Validators.required]],
        mobilenumber:['',[Validators.required]],
        email:['',[Validators.required]],
              });  
             
  }

  updateRegister(){
    this.ser.updateUserFormDetails(this.loginForm.value).subscribe();
    this.updateflag='false';
    
  }
  loadUserDetails(){
    console.log("===>Update  user details  this user name "+this.username)
    this.updateflag='ture';
    this.userdetails.forEach(d=>{
      console.log("Object username "+d.username)
      if(this.username==d.username){
        this.updateuserdetails=d;
        console.log("===>Update  user details "+this.updateuserdetails.username)
      }
    })
  }
}
