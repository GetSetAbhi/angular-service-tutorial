import { Component, VERSION } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  products: Product[] = [];

  displayStudent = false;

  public constructor(private productService: ProductService) {}

  toggleStudentData() {
    this.displayStudent = !this.displayStudent;
    if (this.displayStudent) {
      this.products = this.productService.getProducts();
      console.log('Received Service Data');
      console.log(this.products);
    }
  }
}
