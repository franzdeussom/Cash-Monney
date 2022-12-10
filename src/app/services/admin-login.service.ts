import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  baseUri = 'http://localhost:3305/adminLogin.php';

  constructor(private http: HttpClient) { }

  Verify(data : any): Observable<any>{
      return this.http.post<any>(this.baseUri,  data, { withCredentials: true});
  }
}
