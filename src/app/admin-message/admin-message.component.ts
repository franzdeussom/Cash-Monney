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
  }

  loadMessage(){
    this.getMessage.getMessage().subscribe((data : any)=>{
      this.listMessage = data;
      console.log(this.listMessage);
    })
  }

  deleteAll(){
      this.deleteOne.deleteAll().subscribe((data : any)=>{
        if(data.succes){
          alert('supprimer');
        }else{
          alert('echec');
        }
      });
  }

  deleteSelect(id: number){
        this.deleteOne.deleteOne(id).subscribe((data)=>{
          if(data.succes){
            alert('supprimer');
          }else{
            alert('echec');
          }
        });
  }
  zuruck(){
      this.route.navigateByUrl('/admin');
  }


}
