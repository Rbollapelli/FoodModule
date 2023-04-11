import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(public http:HttpClient) { 
    }
 

      getUserDetails():Observable<any>
        {
         return this.http.get<any>("http://localhost:3000/UserDetails");
        }
        register(from:any){
          
        }
}