import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class PathMatched{
  constructor(private router: Router){}
  matchedPathLogin(){
    if(this.router.url === '/login') return true;
    return false
  }
}