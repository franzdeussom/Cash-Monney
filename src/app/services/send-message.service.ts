import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {
  baseUrl = 'http://localhost:3305/sendmessage.php';
  constructor(private http : HttpClient) { }

  send(data: any ): Observable<any>{
    return this.http.post<any>(this.baseUrl, data, {withCredentials: true});
  }
}
