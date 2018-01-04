import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ProductService } from './../service/product.service';
import { UtilService } from './../service/util.service';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @ViewChild('newProductForm') newProductForm : NgForm ;
  propertyTypes: Array<string> = ['Condo', 'Duplex', 'House'];
  constructor(private productService: ProductService, private utilService: UtilService) { }

  ngOnInit() {
  }

  onProductSubmit(data) {
    this.productService.addProduct(data);
    this.newProductForm.reset();
  }

}
