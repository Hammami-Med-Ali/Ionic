import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditproduitPageRoutingModule } from './editproduit-routing.module';

import { EditproduitPage } from './editproduit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditproduitPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditproduitPage]
})
export class EditproduitPageModule {}
