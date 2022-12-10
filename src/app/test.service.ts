import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private val!: number
  constructor() { 
    this.val = 0;
  }
  getVal(): number{
    return this.val;
  }
  setNumber(nVal: number): void{
    this.val = nVal;
  }
}
