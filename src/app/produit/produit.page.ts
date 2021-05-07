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
      nomprod: ["", [Validators.required,Validators.minLength(10)]],
      description: ["", [Validators.required,Validators.minLength(20),Validators.maxLength(100)]],
      prix: ["", [Validators.required,Validators.min(1),Validators.max(20000),Validators.pattern("[0-9]+")]],
      
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
