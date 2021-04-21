import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ProduitService } from '../produit.Service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {
  createform: FormGroup;

  constructor(public produitservice: ProduitService, private router: Router, public toastController: ToastController, private formbuilder: FormBuilder) {
    this.createform = formbuilder.group({
      nomprod: ["", [Validators.required]],
      description: ["", [Validators.required]],
      prix: ["", [Validators.required]],
      
    })


   }

  ngOnInit() {
  }
  create(){
    console.log(this.createform.value);
    
    this.produitservice.save(this.createform.value).subscribe(res =>{
      this.router.navigate(['login'])
    },err => {
      
    })
  
  }
}
