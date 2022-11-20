import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 fullName:string="";
  Address:string="";
  cardNumber!:number;

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.full_name=this.fullName ;
  }
}
