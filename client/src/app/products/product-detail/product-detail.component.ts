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

  constructor(
    private productService: ProductsService,
    private routes: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.routes.params.subscribe(params => {
      this.getProductDetails(params['id']);
    });
  }

  getProductDetails (id) {
    this.productService.getOne(id)
      .subscribe(product => this.product = product);
  }
}
