import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartData:any[]=[];
  constructor() { }

  addToChart(event:any){
    if("cart" in localStorage){
      this.cartData=JSON.parse(localStorage.getItem("cart")!); // parse used when recieve from local storage
      let exist = this.cartData.find(item => item.item.id == event.item.id);
      if(exist){
        alert("you have already added this product to your cart");
      }else{
        alert('This product is successfully added to the cart ');
        this.cartData.push(event);
        localStorage.setItem("cart",JSON.stringify( this.cartData));  // stringfy used when send or update local storage
      }
    
    }else{
      this.cartData.push(event);
      localStorage.setItem("cart",JSON.stringify( this.cartData));
    }
      }
  }


