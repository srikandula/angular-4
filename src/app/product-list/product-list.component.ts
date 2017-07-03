import { ProductService } from '../service/product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './iproduct';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle  = 'Product List';
  listFilter = '';
  showImage  = false;
  products: IProduct[];
  errorMessage:string;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProduct()
        .subscribe(products => this.products = products,
                   errors => this.errorMessage = <any>errors);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
