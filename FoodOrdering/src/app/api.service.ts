import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';

import { registerForm } from './model/registerForm';





@Injectable({

  providedIn: 'root'

})

export class ApiService {

  username = "  ";




  constructor(private http: HttpClient) { }




  postData(data: any) {

    return this.http.post<any>("http://localhost:3000/register", data);

  }




  getData() {

    return this.http.get<any>("http://localhost:3000/register");

  }

  public logout() {




    return true;




  }




  public isLoggedIn() {




    let tokenStr = localStorage.getItem('token');




    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {




      return false;




    } else {




      return true;


    }

  }

  saveForm(reg: registerForm): Observable<any> {

    console.log(reg, "save data");

    return this.http.post<registerForm>(this.getData + "/register", reg);

  }

}