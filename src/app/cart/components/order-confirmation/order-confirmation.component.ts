import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css'],
})
export class OrderConfirmationComponent implements OnInit {
  clientName: string = '';
  cartProducts: any[] = [];
  total: number = 0;
  order: boolean = true;
  constructor(private route: ActivatedRoute) {
    this.clientName = this.route.snapshot.paramMap.get('username')!;
  }
  ngOnInit(): void {
    this.getCartProduct();
    this.getTotalCartPrice();
  }
  //get the set of products added to the cart from the local storage
  getCartProduct() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
  }
  //calculating the tatal price of products
  getTotalCartPrice() {
    this.total = 0;
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.total +=
        this.cartProducts[i].item.price * this.cartProducts[i].quantity;
    }
    this.OrderNothing();
  }
  // if the user press submit without adding anything to cart  
  OrderNothing() {
    if (this.total === 0) {
      this.order = false;
    } else {
      this.order = true;
    }
  }
}
