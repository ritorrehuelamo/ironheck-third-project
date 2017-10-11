import { ShoppingcartService } from './../services/shoppingcart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  private product;
  private shoppingCart: Array<any> = [];
  constructor(
    private productService: ProductsService,
    private routes: ActivatedRoute,
    private shoppingCartService: ShoppingcartService
  ) { }

  ngOnInit() {
    this.routes.params.subscribe(params => {
      this.getProductDetails(params['id']);
    });
    this.shoppingCart = this.shoppingCartService.getShoppingCard();
    console.log(this.shoppingCart);
  }

  getProductDetails(id) {
    this.productService.getOne(id)
      .subscribe(product => {
        this.product = product;
      });
  }

}
