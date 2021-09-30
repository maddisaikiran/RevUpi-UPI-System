import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router:Router,private service:RegistrationService) { }
  private customer= new  Customer();

  ngOnInit() {
    if(!localStorage.getItem('token')){  
      this.router.navigate(['/login']);
      }else{
      let getUserObj=JSON.parse(localStorage.getItem('token'));  
      this.customer.id=getUserObj.id;
      this.customer.firstName=getUserObj.firstName;
      this.customer.lastName=getUserObj.lastName;
      this.customer.emailId=getUserObj.emailId;
      
      }
  }

}
