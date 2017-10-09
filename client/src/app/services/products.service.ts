import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

const BASEURL = environment.BASEURL + '/products';

@Injectable()
export class ProductsService {

  private product: object;

  constructor(private http: Http) { }

  getList() {
    return this.http.get(`${BASEURL}/`)
      .map(res => res.json());
  }

  getOne(id) {
    return this.http.get(`${BASEURL}/${id}`)
    .map(res => res.json());
  }

  createNewProduct(product) {
    return this.http.post(`${BASEURL}/new`, product)
      .map(res => res.json());
  }

  deleteProduct(id) {
    return this.http.delete(`${BASEURL}/${id}`)
      .map(res => res.json());
  }

}
