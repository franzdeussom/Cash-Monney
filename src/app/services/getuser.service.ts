import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetuserService {
 
  constructor( private http : HttpClient) { }
  
  getUserData(): Observable<any>{
     const baseUrl = 'http://localhost:3305/getdatauser.php';
      return this.http.get<any>(baseUrl);
  }

}
