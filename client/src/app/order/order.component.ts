import { TruncatePipe } from './../pipes/truncate.pipe';
import { ShoppingcartService } from './../services/shoppingcart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  private orders;

  constructor(
    private routes: ActivatedRoute,
    private shoppingCartService: ShoppingcartService
  ) { }

  ngOnInit() {
    this.routes.params.subscribe(params => {
      this.getOrdersDetails(params['id']);
    });
  }

  getOrdersDetails(id) {
    this.shoppingCartService.getOrderByUser(id)
      .subscribe(orders => this.orders = orders);
  }

}
