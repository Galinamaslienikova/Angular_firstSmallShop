import { CleanCartService } from './services/clean-cart.service';

import { Component, OnInit } from '@angular/core';


import { ProdserviceService } from './prodservice.service';
import { AddService } from './services/add.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit  {
 
  constructor( private prodtservice:ProdserviceService, private addServ:AddService,private cleancart:CleanCartService ) { }
  products: any=[];
  loading=true;
  cart: any=[];
 
  total=0
  
  ngOnInit() {
   
    if(localStorage.getItem('products')==null){
      
      console.log('init')
   this.prodtservice.loading().subscribe((data)=>{
    this.products=data
    let a=localStorage.getItem("products")||''
    a==''&&localStorage.setItem('products',JSON.stringify(data))
   this.loading=false
   })}else{
    let a=localStorage.getItem('products')||''
    console.log(a)
     this.products=JSON.parse(a)
     this.loading=false
     
     }
    if(localStorage.getItem('cart')!==null){
      let el=localStorage.getItem("cart")||''
    this.cart=JSON.parse(el)||[]
    this.cleancart.removeProductFromLocalCart(this.cart)
    let c=localStorage.getItem('total')||''
     this.total=JSON.parse(c)
    }
    
  }

  add(event: Event){
    this.addServ.addProductToCart(event,this.cart,this.products,this.total)
  }


}
