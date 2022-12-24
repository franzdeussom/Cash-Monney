import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllUsersService } from 'src/app/services/get-all-users.service';
import { OperationService } from 'src/app/services/operation.service';
import { TestService } from 'src/app/test.service';
import { GetuserService } from '../../services/getuser.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {
  decisionToStay!: number;
  decisionToRedirect!: boolean;
  email!: any;
  amount!: Array<any>;
  constructor( private verif: TestService,
               private route: Router,
               private apiGetData: GetuserService,
               private apiOperation : OperationService
               ) { }

  ngOnInit(): void {
    this.decisionToRedirect = false;
    this.decisionToStay = this.verif.getVal();
    this.email = localStorage.getItem('email');
    this.getUserData();
    if(this.decisionToStay == 1 && localStorage.getItem('email')!= null){
      console.log('connecter');
    
    }else{
      this.decisionToRedirect = true;
      setTimeout(() => {
        this.route.navigateByUrl('/login');
      }, 3000);
        
    }
  }

  getUserData(){
    this.apiGetData.getUserData(this.email).subscribe((data)=>{
      this.amount = data;
      console.log(data);
    });
  }
  depot(){
      this.apiOperation.depot().subscribe((data)=>{
        console.log(data);
        this.getUserData();
      });
  }
}
