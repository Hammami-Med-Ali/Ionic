import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProduitService } from '../produit.Service';

@Component({
  selector: 'app-indexproduit',
  templateUrl: './indexproduit.page.html',
  styleUrls: ['./indexproduit.page.scss'],
})
export class IndexproduitPage implements OnInit {
  
  produits:any[]
  constructor(public produitservice: ProduitService) { }

  ngOnInit() {
    this.show()
  }
  show() {

    this.produitservice.show().subscribe((data) => {
      console.log(data);
      this.produits = data;


    });
  }
  delete(produit) {
    //Delete item in Student data

 /*    for (let i=0;i<=this.produits.length;i++){
        if (this.produits[i] == produit){
          console.log(i);
        }
    } */
    this.produitservice.deleteItem(produit.id).subscribe(Response => {
      //Update list after delete is successful
      let index = this.produits.findIndex(p =>  p == produit);
      this.produits.splice(index,1)

    });
  }

}