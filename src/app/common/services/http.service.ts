import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../app.errors/app.errors';
import { BadRequest } from '../app.errors/badrequest.error';

@Injectable()

export class HttpService{
  constructor(private http: HttpClient){}
  url = 'https://reqres.in/api/login';
  postData(postvalue){
    return this.http.post(this.url,postvalue)
    .pipe(catchError((error)=>{
      if(error.status == 400){
        return throwError(new BadRequest() )
      }else{
        return throwError(new AppError(error))
      }
    }))
  }

}