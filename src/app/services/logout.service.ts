import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  baseUrl = 'http://localhost:3305/logout.php';
  constructor(private http : HttpClient) { }

  logOut(){
      return this.http.get(this.baseUrl);
  }
}
