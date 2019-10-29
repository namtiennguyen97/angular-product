import { Injectable } from '@angular/core';
import {SProduct} from './SProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

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
  getProduct() {
    return this.product;
  }
}
