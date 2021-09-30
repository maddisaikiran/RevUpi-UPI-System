import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AlertifyService } from './alertify.service';
import { RegistrationService } from './registration.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   // ReactiveFormsModule,
    
  ],
  providers: [AlertifyService,RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
