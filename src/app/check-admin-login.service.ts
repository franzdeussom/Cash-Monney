import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckAdminLoginService {
   tokken!: number;
  constructor() {
    this.tokken = 0;
   }
   getTokken(): number{
    return this.tokken;
   }
   setTokken(nTokken: number): void{
    this.tokken = nTokken;
   }

}
