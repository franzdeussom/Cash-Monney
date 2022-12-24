import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Users } from '../Models/Users';
import { UserRegisterDataService } from '../services/user-register-data.service';
import { GetuserService } from '../services/getuser.service';

@Component({
  selector: 'app-user-modify-info',
  templateUrl: './user-modify-info.component.html',
  styleUrls: ['./user-modify-info.component.scss']
})
export class UserModifyInfoComponent implements OnInit {
  users!: Users;
    accountCreated!: boolean;
    confirm_pass!: string;
    mdp!: string;
    popup!: boolean;
    exemple! : any;
    dataUsers!: Array<any>;
    type!: string;
    registerForm!: FormGroup;
    errorsOnSubmite!: boolean;
    errorsServer!: boolean;
    registerStatut!: boolean;
    alreadyUsers!: boolean;

    constructor(private route: Router,
      private form: FormBuilder,
      private dataUser : GetuserService,
      private api: UserRegisterDataService ) { }

  ngOnInit(): void {
    this.getDataCurentUser();
    this.errorsOnSubmite = false;
    this.registerStatut = false;
    this.alreadyUsers = false;
    this.errorsServer = false;
    /*this.registerForm = new FormGroup({
      email: new FormControl(),
      name: new FormControl(),
      surname: new FormControl(),
      tel: new FormControl(),
      pwd: new FormControl()
    });*/
    this.mdp = 'un';

    this.registerForm = this.form.group({
      email: ['', Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      tel: ['', Validators.required],
      pwd: ['', Validators.required]
    });
    this.type = 'password';
  }

  showPassword(){
    if(this.type == 'password'){
      this.type = 'text';
    }else{
      this.type= 'password';
    }
  }
  register(){
    
    const val = JSON.stringify(this.registerForm.value);
      alert(val);
      this.popup = true;
  }
 
  redirectToLogin(){
    this.route.navigateByUrl('/login');
  }

  getDataCurentUser(){
    
    var email = localStorage.getItem('email'); 
    const val = JSON.stringify(email);
  
  /*this.dataUser.getUserData()*/
  this.dataUser.getUserData(email).subscribe((data: any)=>{
    this.dataUsers = data;
    this.exemple = this.dataUsers[0].prenom;
    console.log(data);
  }, (errors: any)=>{
    alert(errors.message);
    console.log(errors.message);
  });
}

 backInfo(){
  this.route.navigateByUrl('informations');
 }

 closePopup(){
   this.popup = false;
 }

}
