import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../Models/Users';

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersService {

    constructor(private http: HttpClient ) { }
  
    getAllUsers(): Observable<any>{
      const baseUrl = 'http://localhost:3305';
      return this.http.get<any>(baseUrl + '/users.php'); 
    }
  }
  