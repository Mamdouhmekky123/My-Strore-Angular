import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
@NgModule({
  declarations: [
    CartComponent,
    OrderConfirmationComponent,
    FormComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CartModule { }
