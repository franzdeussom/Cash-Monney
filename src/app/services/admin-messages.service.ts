import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminMessagesService {
   baseUri = 'http://localhost:3305/getAllMessage.php';

  constructor(private http : HttpClient) {}

  getMessage(): Observable<any>{
    return this.http.get<any>(this.baseUri);
  }
}
