import { Component, OnInit } from '@angular/core';
import {SProduct} from '../SProduct';
import {ProductServiceService} from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
title = 'Product List';
imageSize = 90;
imageStyle = 'max-width: 90px';
fillable = '';
  constructor(private productService: ProductServiceService) { }
  filtereredProduct: SProduct[];
  statusImage = true;
  setStatus() {
    this.statusImage = !this.statusImage;
  }
  changeSize(value) {
    this.imageSize = value;
  }
 getFilter() {
    return this.fillable;
}
getProductList() {
 return this.productService.getProduct();
}
  ngOnInit() {
    this.filtereredProduct = this.productService.getProduct();
  }
  setFilter(value: string) {
    this.fillable = value;
    this.filtereredProduct = this.fillable ? this.filter(this.fillable) : this.productService.getProduct();
  }
  filter(filterBy: string): SProduct[] {
    return this.productService.getProduct().filter((product: SProduct) => product.name.indexOf(filterBy) !== -1);
  }

}
