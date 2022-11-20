import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Product } from '../../Models/Product';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  @Input() data!:Product;
  @Output() item=new EventEmitter;
  addQuantity:boolean=false;
  amount:number=1;
    constructor() {
     }
  
    ngOnInit(): void {
    }
    
    add(){
        this.item.emit({item :this.data , quantity:this.amount});
      }
    }

