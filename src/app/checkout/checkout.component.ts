import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidateService } from '../products/services/validate.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  phone='';
  mail='';
  onSub=false;
  textDiv=false;
  linkA=false


  

  constructor(private validat:ValidateService) {
  }

  ngOnInit() {
  }
  formChange(){
    if(this.onSub&&this.phone.length>9&&this.mail.length>8){
      this.linkA=true
      

    }else this.linkA=false
  }
  clearLocal(){
    localStorage.removeItem('total')         
    localStorage.removeItem('cart')
    localStorage.removeItem('products')
}
  validName(event:Event){
    this.textDiv=false
    let input=(event.target as HTMLInputElement)
    let value=(event.target as HTMLInputElement).value
    if(value.length<5){
      input.style.backgroundColor = "red";
      this.onSub=false
    } else {
      input.style.backgroundColor = "transparent";
      this.onSub=true
    }
  }
  
  validPhone(event: Event){
    this.textDiv=false
    this.validat.validate(this.onSub,event.target, this.phone, /^0\d\d-\d\d\d-\d\d-\d\d$/ )
  }
  validMail(event: Event){
    this.textDiv=false
    this.validat.validate(this.onSub,event.target, this.mail, /\b[a-zA-Z0-9._]+@[a-z0-9.-]+[.][a-z]{2,4}\b/ )
  }
  formSubmit(event:Event){
   
    if(!this.onSub||this.phone.length<10||this.mail.length<10){ 
      this.textDiv=true
       event.preventDefault()}
    
  }
}
