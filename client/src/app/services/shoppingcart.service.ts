import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingcartService {

  private shoppingCart: Array<any> = [];
  constructor() { }

  addProduct(product) {
    this.shoppingCart.push(product);
  }

  getShoppingCard () {
    return this.shoppingCart;
  }

}
