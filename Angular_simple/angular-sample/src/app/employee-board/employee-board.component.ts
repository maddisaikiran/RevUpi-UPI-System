import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../alertify.service';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-employee-board',
  templateUrl: './employee-board.component.html',
  styleUrls: ['./employee-board.component.css']
})
export class EmployeeBoardComponent  {

  constructor(private loginService: RegistrationService, private router : Router
		,private alertify:AlertifyService) { }

    loggedIn(){
      return localStorage.getItem('token');
    }
    logout(){
          localStorage.removeItem('token');
      this.alertify.success("Logout Success")
          this.router.navigate(['/login']);
    }

}
