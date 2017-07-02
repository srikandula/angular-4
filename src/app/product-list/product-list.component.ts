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
  products: IProduct[] = [{
    'id': 1,
    'name': 'Bike',
    'cost': 50,
    'url': 'http://www.free-icons-download.net/images/bike-icon-77366.png'
  },
  {
    'id': 2,
    'name': 'Car',
    'cost': 3000,
    'url': 'http://www.freeiconspng.com/uploads/vehicle-icon-png-car-sedan-4.png'

  },
  {
    'id': 3,
    'name': 'Mercedes',
    'cost': 4000,
    'url': 'https://cdn2.iconfinder.com/data/icons/automobile-repair-service/512/mercedes-car-sedan-auto-front-view-512.png'

  }];
  constructor() { }



  ngOnInit() {
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
