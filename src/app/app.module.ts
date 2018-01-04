import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListingsComponent } from './listings/listings.component';
import { CardComponent } from './cards/card/card.component';
import { SortByPipe } from './pipe/sort-by.pipe';

import { ProductService } from './service/product.service';
import { UtilService } from './service/util.service';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    CardComponent,
    SortByPipe,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService,UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
