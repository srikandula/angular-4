import { IProduct } from '../product-list/iproduct';
import { ProductService } from '../service/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Details';
  productId: number;
  product: IProduct;
  products: IProduct[];
  private sub: Subscription;
  errorMessage: string;
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(
      params => {
        let id = +params['id'];
        this.getProduct(id);
      });
  }

  getProduct(id: number) {
    this._productService.getProductById(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  onBack() {
    this._router.navigate(['/product']);
  }
}
