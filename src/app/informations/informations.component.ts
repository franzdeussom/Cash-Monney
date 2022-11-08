import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GetuserService } from '../services/getuser.service';
import { RefreshAmountService } from '../services/refresh-amount.service';
import { TestService } from '../test.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {
    
    decisionToRedirect!: boolean;
    nu!: number;
    dataUsers!: Array<any>;
    dataSaving!: Array<any>;

  constructor(
    private isLogin: TestService,
    private route: Router,
    private dataUser: GetuserService,
    private reloadAmount: RefreshAmountService
  ) {  
      this.dataSaving = new Array<any>;
    }

  ngOnInit(): void {
    this.decisionToRedirect = false;

    if(this.isLogin.getVal()!=0){
    
      this.getDataCurentUser();
    
    }else{
      this.decisionToRedirect = true;

      setTimeout(() => {
      this.route.navigateByUrl('/login');
      }, 3000);
    }
  

  }

  refreshAmount(){
    var email = localStorage.getItem('email'); 
    const id = JSON.stringify(email);
    this.reloadAmount.getAmount(id).subscribe((data)=>{
      this.dataSaving = data;
      console.log(data);
    }, (errors)=>{
        console.log(errors);
    })
}

  getDataCurentUser(){
    
      var email = localStorage.getItem('email'); 
      const val = JSON.stringify(email);
    
    /*this.dataUser.getUserData()*/
    this.dataUser.getUserData().subscribe((data)=>{
      this.dataUsers = data;
      console.log(data.email, data.amount);
      alert(this.dataUsers);
        if(data.email == localStorage.getItem('email')){
          alert('ok');
          console.log(data.email, data.mdp);
          this.refreshAmount();
        }
        else if(data.errors){
            alert('Erreur interne du server');
        }
    }, (errors)=>{
      alert(errors.message);
      console.log(errors.message);
    })
  }

}
