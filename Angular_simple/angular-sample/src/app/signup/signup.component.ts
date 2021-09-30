import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { RegistrationService } from '../registration.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from '../alertify.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  ngOnInit(): void {
  }
  customer = new Customer();
  msg='';
  constructor(private service: RegistrationService, private router: Router,private alertify:AlertifyService) { 
    
  }

  signup() {
    this.service.registerUser(this.customer).subscribe(
      data => {
        this.alertify.success("Registration Successful");
        this.router.navigate(['/login']);
      },
      error => {
        this.alertify.error("Registration Failed");
        this.msg="Email already exists";
      }
    );
  }
}
