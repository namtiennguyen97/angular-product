import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductAddComponent} from './products/product-add/product-add.component';

const routes: Routes = [
  {path: 'product', component: ProductListComponent},
  {path: 'add', component: ProductAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
