import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';
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
  productData: any={ 
    id:0,
  name: "...",
  price: 0,
  url: "https://userguiding.com/wp-content/uploads/2021/05/product-service-manager.jpg",
  description: "..."           
}; 
  amount: number = 1;
  item: any = {};
  constructor(private route: ActivatedRoute, private service: ProductsService,private service2:CartService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getSingleProduct();
  }
  getSingleProduct() {
    this.service.getAsingleProduct(this.id).subscribe(
      (res: any) => {
        this.productData = res;
      },
      (error) => {
        alert(error);
      }
    ); //subscrib ----> observable object  قناة بتعبر من خلالها الداتا من الباك للفرونت
  }
 

  // add prouct to the cart using  local storage 
  addToChart() {
    this.item = { item: this.productData, quantity: this.amount };
    this.service2.addToChart(this.item); 
  }
}
