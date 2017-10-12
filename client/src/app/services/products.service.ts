import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

const BASEURL = environment.BASEURL + '/api/products';

@Injectable()
export class ProductsService {

  private product: object;
  private options = {withCredentials: true};

  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${BASEURL}/`, this.options)
      .map(res => res.json());
  }

  getOne(id) {
    return this.http.get(`${BASEURL}/${id}`, this.options)
    .map(res => res.json());
  }

  createNewProduct(product) {
    return this.http.post(`${BASEURL}/new`, product, this.options)
      .map(res => res.json());
  }

  updateProduct(id, product) {
    return this.http.put(`${BASEURL}/${id}/edit`, product, this.options)
      .map(res => res.json());
  }

  deleteProduct(id) {
    return this.http.delete(`${BASEURL}/${id}/delete`, this.options)
      .map(res => res.json());
  }

}
