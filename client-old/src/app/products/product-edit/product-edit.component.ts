import { AuthService } from './../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product;
  user;

  editProduct = {
    name: '',
    producer: '',
    price: 0,
    ecological: false,
    description: '',
    image: ''
  };

  constructor(
    private productService: ProductsService,
    private routes: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {
    this.auth.isLoggedIn()
    .subscribe( user => this.user = user );
  }

  ngOnInit() {
    this.routes.params.subscribe(params => {
      this.getProductDetails(params['id']);
    });
  }

  getProductDetails(id) {
    this.productService.getOne(id)
      .subscribe(product => {
        this.product = product._id;
        this.editProduct = {
          name: product.name,
          producer: product.producer.username,
          price: product.price,
          ecological: product.ecological,
          description: product.description,
          image: product.image
        };
      });
  }

  saveChanges() {
    this.productService.updateProduct(this.product, this.editProduct)
      .subscribe(() => {
        this.router.navigate(['/products', this.product]);
      });
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product)
      .subscribe(() => {
        this.router.navigate(['/products']);
      });
  }

}
