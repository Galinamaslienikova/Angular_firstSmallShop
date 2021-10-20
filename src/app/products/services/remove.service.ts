import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemoveService {

  constructor() { }
  removeProductFromCart(event: Event,cart:any=[],products:any=[],total:any){
     let e=(event.target as HTMLButtonElement).id  
    cart.map((element:any) => {
        if(e==element.id){
            if(element.amount>0){
                element.amount=element.amount*1-1
                let result = products.findIndex((product:any) => {
                        return product.id == element.id;
                    }
                );
                products[result].available += 1;    
                total=total*1-1
                localStorage.setItem('total',JSON.stringify(total))
            }
           
            localStorage.setItem('products',JSON.stringify(products))
            return element   
        }
        return element   
    });
   
    localStorage.setItem('cart', JSON.stringify(cart));
}
}
