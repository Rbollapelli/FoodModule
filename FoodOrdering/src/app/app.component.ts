import { Validators, FormBuilder, FormGroup } from '@angular/forms';


import { UserDetailsForm } from './model/userDetails';
import { Component } from '@angular/core';

import { Subject } from 'rxjs';
import { Route, Router } from '@angular/router';
import { UserForm } from './model/user';
import { ServiceService } from './service.service';
import { UserService } from './user-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodOrdering';
  userdetails!: UserDetailsForm;
  loginuserdetails!: UserDetailsForm;
  userForm1!: UserForm[];
  finalUser!: UserForm;
  loginForm!: FormGroup;
  loginflag: string = "false";
  registerFlag: string = "false";
  constructor(private fb: FormBuilder, private ser: ServiceService, private router: Router, private userService: UserService) {

  }
  ngOnInit(): void {
    this.ser.getUserDetails().subscribe((data) => {
      this.userdetails = data;

    });
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      usertype: ['', [Validators.required]],
      authdata: ['', [Validators.required]],
      address: ['', [Validators.required]],

      mobilenumber: ['', [Validators.required]],

      email: ['', [Validators.required]],
    });
  }
  login() {
    console.log("==========>" + this.loginForm.value);
    this.ser.getUserDetailsVal(this.loginForm.value).subscribe((data) => {
      console.log(data + "==>");
      this.loginflag = "true";
      this.registerFlag = "true";
      this.userForm1 = data;
      this.userForm1.forEach((d => {
        this.finalUser = d;
        this.ser.addUserData(d.username);
        console.log(d.usertype);
      }))

    })
  }
  loginRegister() {
    console.log(this.loginForm.value);
    this.ser.registerUser(this.loginForm.value).subscribe();
    this.registerFlag = "true";
    window.location.reload();
  }
}

