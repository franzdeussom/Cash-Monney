import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserLoginService } from '../services/user-login.service';
import { TestService } from '../test.service';

@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.scss']
})
export class LoginUsersComponent implements OnInit {
  inputType!: string;
  mailUsers!: string;
  passUsers!: string;
  formLogin!: FormGroup; 
  errorsServer!: boolean;
  errorsOnSubmite!: boolean; 
  serviceStorage!: any; 
  authentificationFailed!: boolean;
  decision!: boolean;
  showTemplate!: boolean;

  constructor( private route: Router, 
               private authentificated: TestService,
               private form: FormBuilder,
               private authentifation: UserLoginService 
               ) { }

  ngOnInit(): void {
    this.showTemplate = false;
    if(localStorage.getItem('email') != null && this.authentificated.getVal()!=0){
        this.showTemplate = true;
    }
    this.formLogin = this.form.group({
      email: ['', Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      pass: ['', Validators.required]
    });
    this.inputType = 'password';
    this.errorsOnSubmite= false;

  }

  get email(){
    return this.formLogin.value.email;
  }
  get pass(){
    return this.formLogin.value.pass;
  }
 login(){
  console.log('click');

  if(this.pass=='' || this.email==''){
    this.errorsOnSubmite=true;
    setTimeout(() => {
      this.errorsOnSubmite=false;
    }, 4000);
    return;
  }
      const val = JSON.stringify(this.formLogin.value);

    this.authentifation.login(val).subscribe((data)=>{
      console.log(data);
      if(data.length > 0){
      localStorage.setItem('email', this.email);
      this.authentificated.setNumber(1);
      this.route.navigateByUrl('/home');
      
    }else if(data.errors==true){
          this.authentificationFailed=true;
          setTimeout(() => {
            this.authentificationFailed=false;
          }, 4000);
      }
    }, (errors)=> {
        if(errors.status==500){
          this.errorsServer = true;
         setTimeout(() => {
            this.errorsServer=false;
         }, 4000);
        }
    } );
   /* this.authentificated.setNumber(1);
    this.route.navigateByUrl('/home');*/
  }
 

 Register(){
  this.route.navigateByUrl('/register');
 }
 showPassword(){
    if(this.inputType == 'password'){
      this.inputType = 'text';
    }else{
      this.inputType = 'password';
    }
 }
 logout(){
  localStorage.removeItem('email');
  this.authentificated.setNumber(0);
  this.route.navigateByUrl('/login');
 }
}
