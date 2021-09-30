import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbankComponent } from './addbank/addbank.component';
import { BankbalanceComponent } from './bankbalance/bankbalance.component';
import { EmployeeBoardComponent } from './employee-board/employee-board.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

import { SignupComponent } from './signup/signup.component';
import { TransferComponent } from './transfer/transfer.component';
import { UpdateComponent } from './update/update.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { WalletComponent } from './wallet/wallet.component';



const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:EmployeeBoardComponent},
  {path: 'home',component:HomeComponent},
  {path: 'addbank',component:AddbankComponent},
  {path:'useraccount',component:UseraccountComponent},
  {path:'wallet',component:WalletComponent},
  {path:'bankbalance',component:BankbalanceComponent},
  {path:'profile',component:ProfileComponent},
  {path:'updateprofile',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,SignupComponent,UseraccountComponent,
  WalletComponent,BankbalanceComponent,TransferComponent,ProfileComponent,
 AddbankComponent,HomeComponent,EmployeeBoardComponent,UpdateComponent];