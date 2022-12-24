import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckAdminLoginService } from '../check-admin-login.service';
import { AdminMessagesService } from '../services/admin-messages.service';
import { DeleteMessageService } from '../services/delete-message.service';

@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.scss']
})
export class AdminMessageComponent implements OnInit {
   listMessage!: Array<any>;
    idMessage!: any;
    actionDone!: boolean;
    delActionDone!: boolean;


  constructor(private getMessage : AdminMessagesService,
              private route : Router,
              private deleteOne: DeleteMessageService,
              private checkTokken : CheckAdminLoginService          
    ) { }

  ngOnInit(): void {
      this.loadMessage();
      if(this.checkTokken.getTokken() != 1){
        this.route.navigateByUrl('adminlogin');
      }
      this.actionDone =false;
      this.delActionDone =false;
      
  }

  loadMessage(){
    this.getMessage.getMessage().subscribe((data : any)=>{
      this.listMessage = data;
      console.log(this.listMessage);
            this.actionDone = true;
          setTimeout(() => {
              this.actionDone = false;
          }, 3000);
    });
  }

  deleteAll(){
      this.deleteOne.deleteAll().subscribe((data : any)=>{
        if(data.succes){
          alert('supprimer');
          this.loadMessage();
        }else{
          alert('echec');
        }
      });
  }

  deleteSelect(id: any){
        const ID = JSON.stringify(id); 
        this.deleteOne.deleteOne(ID).subscribe((data)=>{
          if(data.succes){
            
            this.loadMessage();
            this.idMessage = id;
            this.delActionDone = true;
          setTimeout(() => {
              this.delActionDone = false;
          }, 3000);
          
          }else{
            alert('echec');
          }
        });
  }
  zuruck(){
      this.route.navigateByUrl('/admin');
  }


}
