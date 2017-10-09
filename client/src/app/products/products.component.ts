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
  ) { }

  ngOnInit() {
    this.productService.getList()
      .subscribe(p => this.products = p);
    this.user = this.authService.getUser();
    this.authService.getLoginEventEmitter()
      .subscribe( user => this.user = user );
  }

}
