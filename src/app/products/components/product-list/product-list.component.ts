import { Component, OnInit } from '@angular/core';
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
  data:any={};
  constructor(private service: ProductsService) {}

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

  addToChart(event:any){
    if("cart" in localStorage){
      this.cartData=JSON.parse(localStorage.getItem("cart")!); // parse used when recieve from local storage
      let exist = this.cartData.find(item => item.item.id == event.item.id);
      if(exist){
        alert("you have already added this product to your cart");
      }else{
        this.cartData.push(event);
        localStorage.setItem("cart",JSON.stringify( this.cartData));  // stringfy used when send or update local storage
      }
    
    }else{
      this.cartData.push(event);
      localStorage.setItem("cart",JSON.stringify( this.cartData));
    }
      }
      
}

