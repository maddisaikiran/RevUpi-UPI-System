import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bank } from './bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http:HttpClient,private router:Router) { }

  public bankUser(bank:Bank): Observable<Bank>{
    return this.http.post<Bank>("http://localhost:8080/bankdetails",bank);
  }
}
