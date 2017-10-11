import { DecimalPipe } from '@angular/common';
import { ShoppingcartService } from './../services/shoppingcart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  private product: object;
  public amount: Number = 0;

  constructor(
    private productService: ProductsService,
    private routes: ActivatedRoute,
    private shoppingCartService: ShoppingcartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.shoppingCartService.getAmount();
    this.routes.params.subscribe(params => {
      this.getProductDetails(params['id']);
    });
  }

  getProductDetails(id) {
    this.productService.getOne(id)
      .subscribe(product => {
        this.product = product;
      });
  }

  clear() {
    this.shoppingCartService.clear();
  }

}
