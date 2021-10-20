import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdserviceService {

  productsUrl='http://my-json-server.typicode.com/achubirka/db/products'
  constructor(private http: HttpClient ) { }
loading(){
  let res=this.http.get(this.productsUrl);
  return new Observable(observer=>{
    res.subscribe(data=>{
      console.log(data)
      observer.next(data)
      observer.complete()
    })
  });
}
  
}
