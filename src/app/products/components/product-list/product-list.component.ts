import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from '../../Models/Product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = []; //بعمل ارراي  عشان استقبل فيه ال داتا
  cartData:any[]=[]; //intermediate channel between local storage and items in product-list component
  constructor(private service: ProductsService ,private service2:CartService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.service.getAllProducts().subscribe((res: any) => {
      this.products=res;
    } , error=>{
      alert(error.message);
    });//subscrib ----> observable object  قناة بتعبر من خلالها الداتا من الباك للفرونت
  }

    // add prouct to the cart using  local storage 

  addingToChart(event:any){
  this.service2.addToChart(event);   
}

}