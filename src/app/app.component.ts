import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { CheckAdminLoginService } from './check-admin-login.service';
import { Users } from './Models/Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cash-Monney';
  faCoffe = faCoffee;  

  
}
