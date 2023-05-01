import { Injectable } from '@angular/core';
import { AppModule } from '../app.module';
import { Product } from '../model/product';

@Injectable()
export class ProductService {
  constructor() {}

  private products: Product[] = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  getProducts() {
    return this.products;
  }
}
