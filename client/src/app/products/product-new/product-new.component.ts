import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  user;
  newProduct = {};
  constructor(
    private productService: ProductsService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.authService.isLoggedIn()
      .subscribe( user => {
        this.user = user;
        this.newProduct = {producer: this.user._id};
      });
  }

  saveChanges() {
    this.productService.createNewProduct(this.newProduct)
      .subscribe(() => {
        this.router.navigate(['/products']);
      });
  }

}
