import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../alertify.service';
import { Bank } from '../bank';
import { BankService } from '../bank.service';


@Component({
  selector: 'app-addbank',
  templateUrl: './addbank.component.html',
  styleUrls: ['./addbank.component.css']
})
export class AddbankComponent{

  bank = new Bank();

  constructor(private router: Router,private service:BankService,
    private alertify:AlertifyService) { }

    bankdetails() {
      this.service.bankUser(this.bank).subscribe(
        data => {
          this.alertify.success("Bank account Successful");
          this.router.navigate(['/login']);
        },
        error => {
          this.alertify.error("Registration Failed");
          
        }
      );
    }
    }


