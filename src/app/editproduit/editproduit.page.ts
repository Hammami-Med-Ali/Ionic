import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ProduitService } from '../produit.Service';

@Component({
  selector: 'app-editproduit',
  templateUrl: './editproduit.page.html',
  styleUrls: ['./editproduit.page.scss'],
})
export class EditproduitPage implements OnInit {
  createform: FormGroup;
  constructor(public produitservice: ProduitService, private router: Router, public toastController: ToastController, private formbuilder: FormBuilder) {
    this.createform = formbuilder.group({
      id: ["", [Validators.required]],
      nomprod: ["", [Validators.required]],
      description: ["", [Validators.required]],
      prix: ["", [Validators.required]],
      
    })


   }

  ngOnInit() {
  }

}
