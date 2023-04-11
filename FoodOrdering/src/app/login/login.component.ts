import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username: [''],
      password: [''],


    })
  }

  constructor(private formbuilder: FormBuilder, private _http: HttpClient, private _api: ApiService,
    private router: Router) { }


  login() {
    this._http.get<any>("http://localhost:3000/register").subscribe(res => {

      const user = res.find((a: any) => {

        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
      })

      if (user) {

        this._api.username = this.loginForm.value.username;

        this.loginForm.reset();

        this.router.navigate(['dashboard'])
        // alert("log in succesful");

      } 
      else {

        // alert("user not found")

      }
    },
    //  err => {

    //   alert('invalid username/Password')

    // }

    )
  }




}