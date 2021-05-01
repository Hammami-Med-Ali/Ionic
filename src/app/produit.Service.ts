import { User } from './Model/User';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Produit } from './Model/Produit';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ProduitService {

  constructor(private http: HttpClient) { }
  //************************ */
  save(produitsave) {

    return this.http.post(environment.base_path + "api/produit", produitsave);
  }
  //************************ */
  show() {
    return this.http.get<any[]>(environment.base_path + "api/produits");
  }
  //************************ */
  getItem(id): Observable<Produit> {
    return this.http
      .get<Produit>(environment.base_path + 'api/produit/' + id)
  }
  //************* */
  updateItem(id, item): Observable<Produit> {
    debugger;
    return this.http
      .put<Produit>(environment.base_path + 'api/produitupdate/' + id,item)

  }
  deleteItem(id) {

    return this.http.delete(environment.base_path + 'api/produitdelete/' + id)

  }
}
