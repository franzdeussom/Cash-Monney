import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  currentUsers!: any;
  constructor() { }

  ngOnInit(): void {
    this.currentUsers = localStorage.getItem('email');
  }

}
