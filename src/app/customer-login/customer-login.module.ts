import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerLoginRoutingModule } from './customer-login-routing.module';
import { CustomerLoginComponent } from './customer-login.component';


@NgModule({
  declarations: [
    CustomerLoginComponent
  ],
  imports: [
    CommonModule,
    CustomerLoginRoutingModule
  ]
})
export class CustomerLoginModule { }
