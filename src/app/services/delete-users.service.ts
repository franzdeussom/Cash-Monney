import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteUsersService {
  
  baseUri='http://localhost:3305/deleteUsers.php'
  
    constructor(private http: HttpClient) { }

  delete(data: any): Observable<any>{
    return this.http.post<any>(this.baseUri, data, {withCredentials: true});
  }
}
