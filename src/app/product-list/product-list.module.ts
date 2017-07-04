import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list.component';
import { ProductListFilterPipe } from './product-list-filter.pipe';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

import { ProductService } from '../service/product.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductListFilterPipe,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'product', component: ProductListComponent },
      { path: 'detail/:id', component: ProductDetailComponent }
    ])
  ],
  providers: [ProductService]
})
export class ProductListModule { }
