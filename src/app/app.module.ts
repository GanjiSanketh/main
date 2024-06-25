import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerLoginModule } from './customer-login/customer-login.module';
import { OtpVerificationModule } from './otp-verification/otp-verification.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerLoginModule,
    OtpVerificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
