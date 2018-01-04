import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { ProductService } from '../service/product.service';
import { UtilService } from '../service/util.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  dataList: Array<Product> = [];
  error: string = '';
  sortField: string = 'price';
  sortDirection: string = 'asc';
  sortFields: Array<string> = [
    'address',
    'area',
    'bathrooms',
    'bedrooms',
    'price',
    'type'
  ];
  constructor(private productService : ProductService, private utilService : UtilService) {

   }

  ngOnInit() {
    this.productService.getAllProduct()
      .subscribe(
        data => this.dataList = data,
        error => this.error = error.statusText
      );

    this.productService.newSub.subscribe(
      data => this.dataList = [data, ...this.dataList]
    );
  }

}
