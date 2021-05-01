import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditproduitPage } from './editproduit.page';

const routes: Routes = [
  {
    path: ':id',
    component: EditproduitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditproduitPageRoutingModule {}
