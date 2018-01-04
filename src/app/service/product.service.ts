import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'; //for json obj
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class ProductService {

  public newSub = new Subject<any>();

  constructor(private http: Http) { }

  getAllProduct() {
    return this.http.get('http://gateforyou.16mb.com/api/tempdata.php').map(res => 
    res.json());
  }

  addProduct(data) {
    console.log(" data : "+ data);
    data.image = 'default-crib';
    this.newSub.next(data);
  }

}
