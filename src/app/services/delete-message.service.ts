import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteMessageService {
   baseUriApiDeleteOneMsg = 'http://localhost:3305/deleteMessage.php';
   baseUriApiAllDeleteMsg = 'http://localhost:3305/deleteAllMessage.php';
  
   constructor(private http: HttpClient) { }

    deleteAll(): Observable<any>{
      return this.http.get<any>(this.baseUriApiAllDeleteMsg);
    }

    deleteOne(id : any): Observable<any>{
      return this.http.post<any>(this.baseUriApiDeleteOneMsg, id, {withCredentials : true}); 
    }
}
