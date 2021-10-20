import { CleanCartService } from './../products/services/clean-cart.service';
import { RemoveService } from './../products/services/remove.service';
import { Component, OnInit } from '@angular/core';
import { AddService } from '../products/services/add.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: any=[]
  el: string=''
  loading=true
  products:any=[]
  count=0
  total=0
  constructor(private addservise:AddService,private removeservice:RemoveService,private cleancart:CleanCartService) { }
totalCart(){
  this.cart.map((element:any)=>{
    this.total=element.amount*element.price+this.total
  })
}
  ngOnInit() {
    let a=localStorage.getItem('products')||''
    this.products=JSON.parse(a)
    this.el=localStorage.getItem("cart")||''
    this.cart=JSON.parse(this.el)||[]
    this.cleancart.removeProductFromLocalCart(this.cart)
    let c=localStorage.getItem('total')||''
    this.count=JSON.parse(c)
    this.totalCart()
    this.loading=false
    
  }
  add(event: Event){
    let c=localStorage.getItem('total')||''
    this.count=JSON.parse(c)
    this.total=0
    this.addservise.addProductToCart(event,this.cart,this.products,this.count)
    this. ngOnInit()
    
  
  }
  remove(event:Event){
    let c=localStorage.getItem('total')||''
    this.count=JSON.parse(c)
    this.total=0
    this.removeservice.removeProductFromCart(event,this.cart,this.products,this.count)
    this. ngOnInit()
    
  }
}
