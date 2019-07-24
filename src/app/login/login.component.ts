import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { HttpService } from '../common/services/http.service';

@Component({
  selector:'app-login',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css']
})

 export class LoginComponent{
   constructor(private httpservice:HttpService){}
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
     this.httpservice.postData(authdata)
     .subscribe((result)=>{
       console.log(result);
     }, error(err){
       console.log(err)
     })
   }
 }