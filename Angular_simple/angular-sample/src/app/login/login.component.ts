import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { RegistrationService } from '../registration.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from '../alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  

  ngOnInit(): void {
  }
 customer = new Customer();
 customer1 = new Customer();
 msg = '';


  constructor(  private router: Router,
    private service: RegistrationService,private alertify:AlertifyService) { 
     
    }

    login() {
      this.service.loginUser(this.customer).subscribe(
        data => {
          this.alertify.success("Login Sucessful");
          localStorage.setItem('token',JSON.stringify(data));
          this.router.navigate(['/useraccount'])
        },
        error => {
          this.alertify.error("Login Failed");
          this.msg = "Invalid email or password";
        }
      );
    }

    

}
