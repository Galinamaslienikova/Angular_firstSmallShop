import { CheckoutComponent } from './checkout/checkout.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'thanks',component:ThanksPageComponent},
  {path:'check',component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
