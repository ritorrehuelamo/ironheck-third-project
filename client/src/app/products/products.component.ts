import { AuthService } from './../services/auth.service';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  user;
  products;

  constructor(
    private productService: ProductsService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.user = this.authService.getUser();
    this.authService.isLoggedIn()
      .subscribe( user => {
        this.user = user;
        this.productService.getList()
        .subscribe(p => this.products = p);
      });
  }

}
