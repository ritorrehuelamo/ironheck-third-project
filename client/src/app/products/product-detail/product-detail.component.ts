import { ShoppingcartService } from './../../services/shoppingcart.service';
import { AuthService } from './../../services/auth.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product;
  user;

  constructor(
    private productService: ProductsService,
    private routes: ActivatedRoute,
    private auth: AuthService,
    private shoppingCart: ShoppingcartService
  ) {
    this.auth.isLoggedIn()
    .subscribe( user => this.user = user );
  }

  ngOnInit() {
    this.routes.params.subscribe(params => {
      this.getProductDetails(params['id']);
    });
  }

  getProductDetails (id) {
    this.productService.getOne(id)
      .subscribe(product => this.product = product);
  }

  addShoppingItem() {
    this.shoppingCart.addProduct(this.product);
  }
}
