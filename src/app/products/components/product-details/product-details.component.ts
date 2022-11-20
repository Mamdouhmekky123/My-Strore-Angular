import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../Models/Product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id!: any;
  allProducts: any[] = [];
  data!: Product;
  amount: number = 1;
  item: any = {};
  constructor(private route: ActivatedRoute, private service: ProductsService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getSingleProduct();
  }
  getSingleProduct() {
    this.service.getAsingleProduct(this.id).subscribe(
      (res: any) => {
        this.data = res;
      },
      (error) => {
        alert(error);
      }
    ); //subscrib ----> observable object  قناة بتعبر من خلالها الداتا من الباك للفرونت
  }
  updateCartQuantity() {
    this.service.amountFromDetais = this.amount;
    alert('The product is successfully added to the cart');
  }

  // add prouct to the cart using  local storage 
  addToChart() {
    this.item = { item: this.data, quantity: this.amount };
    if ('cart' in localStorage) {
      this.allProducts = JSON.parse(localStorage.getItem('cart')!); // parse used when recieve from local storage
      let exist = this.allProducts.find((item) => item.item.id == this.data.id);
      if (exist) {
        alert('you have already added this product to your cart');
      } else {
        this.allProducts.push(this.item);
        alert('The product is successfully added to the cart');

        localStorage.setItem('cart', JSON.stringify(this.allProducts)); // stringfy used when send or update local storage
      }
    } else {
      this.allProducts.push(this.item);
      alert('The product is successfully added to the cart');
      localStorage.setItem('cart', JSON.stringify(this.allProducts));
    }
  }
}
