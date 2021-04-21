import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProduitService } from '../produit.Service';

@Component({
  selector: 'app-indexproduit',
  templateUrl: './indexproduit.page.html',
  styleUrls: ['./indexproduit.page.scss'],
})
export class IndexproduitPage implements OnInit {
produits
  constructor(public produitservice: ProduitService,public modalController:ModalController) { }

  ngOnInit() {this.show()
  }
  show(){
   
    this.produitservice.show().subscribe((data)=>{
      console.log(data);
      this.produits = data;
    
      
    });
}

}