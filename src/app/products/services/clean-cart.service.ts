import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CleanCartService {

  constructor() { }
  removeProductFromLocalCart(cart:any=[]){
    if (cart.length>0){
            cart.forEach((elem:any,index:any)=>{
                if (elem.amount==0){
                    cart.splice(index,1)
                }
            })
        localStorage.setItem('cart', JSON.stringify(cart)); 
    }
    
}
}
