import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { HttpService } from '../common/services/http.service';
import { AppError } from '../common/app.errors/app.errors';
import { BadRequest } from '../common/app.errors/badrequest.error';

@Component({
  selector:'app-login',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css']
})

 export class LoginComponent{
   constructor(private httpservice:HttpService){}
   form = new FormGroup({
     email: new FormControl('eve.holt@reqres.in',[
       Validators.required
     ]),
     password: new FormControl('cityslicka',[
       Validators.required
     ])
   })

   get email(){
     return this.form.get('email');
   }
   get password(){
     return this.form.get('password')
   }

   login(authdata){
     this.httpservice.postData(authdata.value)
     .subscribe((result)=>{
       console.log(result);
     },(error: AppError)=>{
       if(error instanceof BadRequest){
         alert('not found');
       }else{
          alert('Unexpected error')
       }
 
     })
   }
 }