import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts: any[] = [];
  total: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.getCartProduct();
  }
  //get the set of products added to the cart from the local storage
  getCartProduct() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getTotalCartPrice();
  }
  //calculating the tatal price of products
  getTotalCartPrice() {
    this.total = 0;
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.total +=
        this.cartProducts[i].item.price * this.cartProducts[i].quantity;
    }
  }
  //decrese amount of product
  minus(index: number) {
    this.cartProducts[index].quantity--;
    this.getTotalCartPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  //Increse amount of product
  plus(index: number) {
    this.cartProducts[index].quantity++;
    this.getTotalCartPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  //detect changes in  amount of product
  detectChange() {
    this.getTotalCartPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  //delete  products from cart
  deleteItem(index: number) {
    this.cartProducts.splice(index, 1);
    this.getTotalCartPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  clearData() {
    this.cartProducts = [];
    this.getTotalCartPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
}
