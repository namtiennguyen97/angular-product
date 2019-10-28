import { Component, OnInit } from '@angular/core';
import {SProduct} from '../SProduct';

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

  constructor() { }
  product: SProduct[] = [
    {
      id: 1,
      name: 'heroin',
      price: 200000,
      image: './assets/images/2.jpg',
      productStatus: 'available'
    },
    {
      id: 2,
      name: 'knife',
      price: 300000,
      image: './assets/images/dullll.png',
      productStatus: 'out-of-stock'
    },
    {
      id: 3,
      name: 'hot weapon',
      price: 526322,
      image: './assets/images/mercy.png',
      productStatus: 'available'
    }
  ];
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
  ngOnInit() {
    this.filtereredProduct = this.product;
  }
  setFilter(value: string) {
    this.fillable = value;
    this.filtereredProduct = this.fillable ? this.filter(this.fillable) : this.product;
  }
  filter(filterBy: string): SProduct[] {
    return this.product.filter((product: SProduct) => product.name.indexOf(filterBy) !== -1);
  }

}
