import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }
  validate(onSub:any,input:any,elem:any, patternValue:any) {

    let res = elem.search(patternValue);
    if (res == -1) {
      input.style.backgroundColor = "red";
      onSub=false
     
    } else {
      input.style.backgroundColor = "transparent";
      onSub=true
     
    }
  }
}
