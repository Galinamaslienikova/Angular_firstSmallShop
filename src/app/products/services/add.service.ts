import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  
 
  constructor() { }

  addProductToCart(event: Event,cart:any=[],products:any=[],total:any){
      console.log(total)
      let count=total*1
     let e=(event.target as HTMLButtonElement).id
     products.map((element:any) => {
      if(e==element.id){
          if(element.available>0){
              element.available=element.available*1-1
              if (cart) {
                  let result = cart.findIndex((product:any) => {
                      return product.id == element.id;
                  });
                      if (result >= 0) {
                          cart[result].amount += 1;
                      } else {
                          cart.push({
                              id:element.id,
                              name:element.name,
                              price:element.price,
                              amount:1
                          });
                      }
                      count=count+1
    localStorage.setItem('total',JSON.stringify(count))
                 
                  localStorage.setItem('cart',JSON.stringify(cart))
                 
              } else {
                count=count+1
                localStorage.setItem('total',JSON.stringify(count))
                
                  localStorage.setItem('cart', JSON.stringify([{
                      id:element.id,
                      name:element.name,
                      price:element.price,
                      amount:1
                  }])); 
              }
        }else{
  
          return element   
        }
        
      }
      return element   
  });
    
    localStorage.setItem('products',JSON.stringify(products))
 
    }
}
