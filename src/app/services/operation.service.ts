import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  baseUrl = 'http://localhost:3305/addmonney.php';
  constructor(private http: HttpClient) { }

  depot(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }
  retrait(){
    
  }
}
