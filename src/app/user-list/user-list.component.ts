import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../products/product-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
  }
getProductList() {
   return this.productService.getProduct();
}
}
