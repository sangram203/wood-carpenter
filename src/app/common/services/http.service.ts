import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class HttpService{
  constructor(private http: HttpClient){}
  url = '#';
  postData(postvalue){
    return this.http.post(this.url,postvalue)
  }

}