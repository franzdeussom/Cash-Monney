import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Users } from '../Models/Users';
import { UserRegisterDataService } from '../services/user-register-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    users!: Users;
    accountCreated!: boolean;
    confirm_pass!: string;
    mdp!: string;
    type!: string;
    registerForm!: FormGroup;
    errorsOnSubmite!: boolean;
    errorsServer!: boolean;
    registerStatut!: boolean;
    alreadyUsers!: boolean;
  constructor(private route: Router,
              private form: FormBuilder,
              private api: UserRegisterDataService ) { }

  ngOnInit(): void {
    localStorage.removeItem('email');
    this.errorsOnSubmite = false;
    this.registerStatut = false;
    this.alreadyUsers = false;
    this.errorsServer = false;
    this.registerForm = this.form.group({
      email: ['', Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      tel: ['', Validators.required],
      pwd: ['', Validators.required]
    });
    this.type = 'password';
  }
  get name(){
    return this.registerForm.value.name;
  }
  get surname(){
    return this.registerForm.value.surname;
  }
  get phone(){
    return this.registerForm.value.tel;
  }
  get email(){
    return this.registerForm.value.email;
  }
  get pass(){
    return this.registerForm.value.pwd;
  }
  
  showPassword(){
    if(this.type == 'password'){
      this.type = 'text';
    }else{
      this.type= 'password';
    }
  }
  register(){
    
    if(this.name=='' || this.phone=='' || this.email=='' || this.pass=='' || this.surname=='' || this.registerForm.invalid){
      this.errorsOnSubmite = true;
      setTimeout(() => {
          this.errorsOnSubmite = false;
      }, 3000);
      return;
    }
    const val = JSON.stringify(this.registerForm.value);
    this.api.postUsers(val).subscribe((data: any)=>{
        if(data.confirm==true){

          this.registerStatut = true;
          
          setTimeout(() => {
          this.route.navigateByUrl('/login');
          this.registerStatut = false;
          }, 4000);
        
        }else if(data.already_users==true){
          this.alreadyUsers=true;
          setTimeout(() => {
              this.alreadyUsers=false;
          }, 4000);
          this.registerForm.value.email = '';
        }
    }, (errors)=> {
      if(errors.status==500){
        this.errorsServer = true;
         setTimeout(() => {
            this.errorsServer=false;
         }, 4000);
      }
    });

  }
 
  redirectToLogin(){
    this.route.navigateByUrl('/login');
  }
}
