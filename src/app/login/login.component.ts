import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
@Component({
  selector:'app-login',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css']
})

 export class LoginComponent{
   form = new FormGroup({
     username: new FormControl('',[
       Validators.required
     ]),
     password: new FormControl('',[
       Validators.required
     ])
   })

   get username(){
     return this.form.get('username');
   }
   get password(){
     return this.form.get('password')
   }

   login(authdata){
     console.log(authdata.value);
   }
 }