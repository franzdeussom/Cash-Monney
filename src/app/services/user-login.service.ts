import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  baseUrl = 'http://localhost:3305/login.php'
  constructor(private http: HttpClient) { }

  login(data: any): Observable<any>{
    return this.http.post<any>(this.baseUrl, data, {withCredentials: true});
  }
}
