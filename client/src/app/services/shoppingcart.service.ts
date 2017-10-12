import { environment } from './../../environments/environment';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

const BASEURL = environment.BASEURL + '/api/orders';

interface CartItem {
  product: any;
  quantity: any;
}


@Injectable()
export class ShoppingcartService {

  private orderByUser: Array<any> = [];
  private shoppingCart: Array<CartItem> = [];
  private totAmount = 0;

  constructor(
    private http: Http,
  ) { }

  getByUserId(id) {
    return this.http.get(`${BASEURL}/`);
  }

  confirmBuy(buyOrder) {
    this.shoppingCart = [];
    return this.http.post(`${BASEURL}/new`, buyOrder)
      .map(res => {
        res.json();
        this.shoppingCart = [];
      });
  }

  getOrderByUser (id) {
    return this.http.get(`${BASEURL}/${id}/user`)
      .map(res => res.json());
  }

  addProduct(product) {
    this.totAmount = 0;
    this.shoppingCart.push({
      product,
      quantity: 1
    });
  }

  saveShoppingCart() {
    this.shoppingCart.forEach(e => {
      this.totAmount += e.product.price * e.quantity;
    });
  }

  setAmount(price, quantity) {
    console.log(price, quantity);
  }

  getAmount () {
    return this.totAmount;
  }

  getShoppingCard() {
    return this.shoppingCart;
  }

  clear() {
    this.shoppingCart = [];
  }

  deleteItem(id) {
    this.shoppingCart.splice(this.shoppingCart.map(e => e.product._id).indexOf(id), 1);
  }
}
