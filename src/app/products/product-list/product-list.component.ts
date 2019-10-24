import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
title = 'Product List';
imageSize: any = '';
fillable = '';
  constructor() { }
  product: any[] = [
    {
      id: 1,
      name: 'heroin',
      price: 200000,
      image: './assets/images/2.jpg'
    },
    {
      id: 2,
      name: 'knife',
      price: 300000,
      image: './assets/images/dullll.png'
    },
    {
      id: 3,
      name: 'hot weapon',
      price: 526322,
      image: './assets/images/mercy.png'
    }
  ];
  statusImage = true;
  setStatus() {
    this.statusImage = !this.statusImage;
  }
  changeSize(value) {
    this.imageSize = value;
  }
  ngOnInit() {
  }

}
