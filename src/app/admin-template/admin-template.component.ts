import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckAdminLoginService } from '../check-admin-login.service';
import { DeleteUsersService } from '../services/delete-users.service';
import { GetAllUsersService } from '../services/get-all-users.service';


@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.scss']
})
export class AdminTemplateComponent implements OnInit {
    users!:Array<any>;
    isAdmin!: boolean;
    httpError!: boolean;
    error!: any;
    textLock!: string;
    simpleGroup!: FormGroup;
  constructor(
    private getUsersFromApi: GetAllUsersService,
    private checkLogIn: CheckAdminLoginService,
    private route: Router,
    private form: FormBuilder,
    private deleteUser: DeleteUsersService
  ) { this.users = new Array<any>   }

  ngOnInit(): void {
    this.textLock = 'Bloquer';
    this.isAdmin = false;
    if( this.checkLogIn.getTokken() == 0){
    this.isAdmin = true;
    //setInterval(()=> {
    this.getUsers();
   //}, 2000)
  } else{
    setTimeout(() => {
      this.route.navigateByUrl('/adminlogin');
    }, 3000);
  } 
    this.httpError = false;
    this.error = '';
  }

  getUsers(){
    this.getUsersFromApi.getAllUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
      /*if(this.users.length == 0){
        this.error = 'Serveur Inaccessible';
        this.httpError=true;
        console.log(this.httpError);
      }*/
        }, 
        (error: any)=> {
          this.error= error;
          console.log(this.error);
        });
  }
  usersLock(id: any){
      if(this.textLock == 'Bloquer'){
        alert('bloquer le users ' + id.email);
        this.textLock = 'Debloquer';   
   } else{
            alert('Debloquer le user' + id.email);
            this.textLock = 'Bloquer';
         }
  }
  deleteUsers(email: any){
    
     const x = confirm('Voulez vous vraiment supprimer le users ' + email + '?');
      if(x){
      
        const val = JSON.stringify(email);
        this.deleteUser.delete(val).subscribe((data: any)=>{
          if(data.confirm==true){
            alert('Utisateur supprimer avec success');
            this.getUsers();
          }else if(data.errors==true) {
            alert('Erreur lors de la suppression !');
          }
        });
      }

      else{
        alert('operation anuler');
      }
  }
}
