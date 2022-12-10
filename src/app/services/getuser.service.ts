import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetuserService {
  baseUrl = 'http://localhost:3305/getdatauser.php';
  
  constructor( private http : HttpClient) { }
  
  getUserData(data: any): Observable<any>{
      return this.http.post<any>(this.baseUrl, data, {withCredentials: true});
  }

}
