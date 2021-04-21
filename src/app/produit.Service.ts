import { User } from './Model/User';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
/* import { login } from './Model/login'; */

@Injectable({
    providedIn:'root'
})

export class ProduitService{
    constructor(private http:HttpClient){}
      save(produitsave){

return this.http.post("http://127.0.0.1:8000/api/produit", produitsave);
      }
      show(){
        return this.http.get("http://127.0.0.1:8000/api/produits");
      }

      update(){
       // return this.http.put("http://127.0.0.1:8000/api/produitupdate");

      }
    }
