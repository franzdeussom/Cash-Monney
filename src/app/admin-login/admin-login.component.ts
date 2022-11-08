import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, MinValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  inputType!: string;
  registerForm!: FormGroup;
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      pseudo : ['' , Validators.required],
      mpass: ['', [Validators.required, Validators.minLength(6)]]
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
    alert('ok');
    if(this.registerForm.invalid){
      return;
    }
    const dataAdmin = JSON.stringify(this.registerForm.value);
    console.log(dataAdmin)
     
  }

}
