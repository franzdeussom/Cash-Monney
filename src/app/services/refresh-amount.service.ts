import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshAmountService {

  baseUrl = 'http://localhost:3305/loadAmount.php'
  constructor(private http : HttpClient) { }

  getAmount(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, data, {withCredentials : true});
  }
  
}
