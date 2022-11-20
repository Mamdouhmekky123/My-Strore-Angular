import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/components/cart/cart.component';
import { OrderConfirmationComponent } from './cart/components/order-confirmation/order-confirmation.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';

const routes: Routes = [
  {path:"products",component:ProductListComponent},
  {path:"details/:id",component:ProductDetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"order-confirmation/:username",component:OrderConfirmationComponent},
  {path:"**",redirectTo:"products",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
