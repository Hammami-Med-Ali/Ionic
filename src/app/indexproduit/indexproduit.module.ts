import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexproduitPageRoutingModule } from './indexproduit-routing.module';

import { IndexproduitPage } from './indexproduit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexproduitPageRoutingModule
  ],
  declarations: [IndexproduitPage]
})
export class IndexproduitPageModule {}
