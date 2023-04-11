import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  registerForm! :FormGroup;

  


  constructor(private api : ApiService , private formbuilder : FormBuilder, private router : Router) {}


  ngOnInit():void{
    this.registerForm = this.formbuilder.group ({
      username: [''],
      
      email:[''],
      password:[''],
      mobile:[''],
      user:['']

    })
  }

  registerUser(){
    console.log(this.registerForm.value)

    this.api.postData(this.registerForm.value).subscribe(data=>{
      alert("register successful")
      this.router.navigate(['login'])

    })

    
    

  }

  

  

}

