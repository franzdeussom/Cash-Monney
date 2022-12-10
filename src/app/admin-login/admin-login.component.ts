import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, MinValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckAdminLoginService } from '../check-admin-login.service';
import { AdminLoginService } from '../services/admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  inputType!: string;
  registerForm!: FormGroup;
  authentificationErrors!: boolean;
  fieldErrors!: boolean;

  constructor( private formBuilder: FormBuilder,
               private checkAdmin: AdminLoginService,
               private Tokken : CheckAdminLoginService,
               private route: Router
               ) { }

  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      pseudo : ['' , Validators.required],
      mpass: ['', [Validators.required, Validators.minLength(5)]]
    });
    
    this.inputType = 'password';

  }

  showPassword(){
    if(this.inputType === 'password'){
      this.inputType = 'text';
    }else{
      this.inputType = 'password';
    }
  }
    get form(){
      return this.registerForm.controls;
    }

  login(){

    if(this.registerForm.invalid){
      this.fieldErrors = true;
      setTimeout(() => {
      this.fieldErrors = false;
      }, 3000);
      return;
    }
    const dataAdmin = JSON.stringify(this.registerForm.value);
  
    this.checkAdmin.Verify(dataAdmin).subscribe((data : any)=>{
      if(data.isAdmin){
          this.Tokken.setTokken(1); 
          this.route.navigateByUrl('/admin');
      }else{
        this.authentificationErrors = true;
        setTimeout(() => {
          this.authentificationErrors = false;  
        }, 3000);
        
      }
    });  
}

}
