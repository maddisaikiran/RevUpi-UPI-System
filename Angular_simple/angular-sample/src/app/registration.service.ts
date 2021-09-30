import { Injectable } from '@angular/core';
import { Observable , Subject} from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  

  constructor(private http:HttpClient,private router:Router) { 
  }
  public loginUser(customer:Customer): Observable<Customer>{
    return this.http.post<Customer>("http://localhost:8080/customer/login",customer);
  }

  public registerUser(customer:Customer): Observable<Customer>{
    return this.http.post<Customer>("http://localhost:8080/customer",customer);
  }

 


  
  

  }

