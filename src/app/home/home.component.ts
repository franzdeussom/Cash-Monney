import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  decisionToStay!: number;
  decisionToRedirect!: boolean;
  constructor( private verif: TestService,
               private route: Router) { }

  ngOnInit(): void {
    this.decisionToRedirect = false;
    this.decisionToStay = this.verif.getVal();
    if(this.decisionToStay == 1 && localStorage.getItem('email')!=null){
      console.log('ok');
      alert('ok')
    }else{
      this.decisionToRedirect = true;
      setTimeout(() => {
        this.route.navigateByUrl('/login');
      }, 3000);
        
    }
  }

}
