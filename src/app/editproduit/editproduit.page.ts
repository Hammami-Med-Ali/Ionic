import { Produit } from './../Model/Produit';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ProduitService } from '../produit.Service';

@Component({
  selector: 'app-editproduit',
  templateUrl: './editproduit.page.html',
  styleUrls: ['./editproduit.page.scss'],
})
export class EditproduitPage implements OnInit {
  id: number;
  data: Produit;
  editform: FormGroup;
  
  constructor(public produitservice: ProduitService, private router: Router, private formbuilder: FormBuilder, public activatedRoute: ActivatedRoute
    ) {
    this.editform = formbuilder.group({
      id: ["", [Validators.required]],
      nomprod: ["", [Validators.required]],
      description: ["", [Validators.required]],
      prix: ["", [Validators.required]],
       })
   }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    console.log(this.id);
    this.produitservice.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
      console.log(this.data);
      this.editform.patchValue(this.data)
      //this.editform.controls['id'].setValue(this.data.id)
    })
  }
  update(editform) {
    this.produitservice.updateItem(this.id, this.editform.value).subscribe(response => {
      this.router.navigate(['indexproduit']);
    })
  }

}
