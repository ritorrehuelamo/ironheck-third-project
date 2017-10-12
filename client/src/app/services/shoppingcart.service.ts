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

  private shoppingCart: Array<CartItem> = [];
  private totAmount = 0;
  private saveItem: object = {
    buyer: '',
    producer: '',
    product: [],
    amount: 0,
    totalPrice: 0
  };

  constructor(
    private http: Http,
  ) { }

  addProduct(product) {
    this.totAmount = 0;
    this.shoppingCart.push({
      product,
      quantity: 1
    });
    this.shoppingCart.forEach(e => {
      this.totAmount += e.product.price * e.quantity;
    });
  }

  getAmount() {
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


  // { buyer, producer, product, amount, totalPrice }
  // saveShoppingCard(userId, providerId, products) {
  //   this.http.post(`${BASEURL}/new`)
  //     .subscribe();
  // }

}
