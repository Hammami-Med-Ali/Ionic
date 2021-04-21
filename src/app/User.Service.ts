

import { User } from './Model/User';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable({
    providedIn:'root'
})

export class UserService{
    headers:Headers;
    constructor(private http:HttpClient){}
      public getbynon(s){
          console.log(s);
            return this.http.get<User>('http://127.0.0.1:8000/api/user/name/'+s.toString())
        }
              
       



            login(e,m){
         

          
                return this.http.post("http://127.0.0.1:8000/api/login", {email:e,password:m});   
            } 
            register(registerInfo){
         

          
                return this.http.post("http://127.0.0.1:8000/api/register", registerInfo);   
            } 
    }
