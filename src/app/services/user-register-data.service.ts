import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterDataService {
   baseUri = 'http://localhost:3305/register.php';
  error!: any;
  constructor(private http: HttpClient) { 
  }

  postUsers(data: any): Observable<any>{
    return this.http.post<any>(this.baseUri, data, { withCredentials: true})
  }
}
