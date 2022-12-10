import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendMessageService } from '../services/send-message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  currentUsers!: any;
  formMessage! : FormGroup;
  constructor(
    private formMsg : FormBuilder,
    private sendMesg : SendMessageService
  ) { }

  ngOnInit(): void {
    this.currentUsers = localStorage.getItem('email');

    this.formMessage = this.formMsg.group({
      email : [''],
      message : ['', Validators.required]
    })
  }

  get email(){
    return this.formMessage.value.email;
  }

  get message(){
    return this.formMessage.value.message;
  }
  
  sendMessage(){
    if(this.formMessage.valid){
      const val = JSON.stringify(this.formMessage.value);
      this.sendMesg.send(val).subscribe((data : any)=>{
        if(data.sucess){
          alert('envoyer');
        }
      });
    }else{
      alert(this.message);
    }
  }
}
