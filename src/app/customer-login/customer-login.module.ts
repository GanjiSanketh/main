import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLoginRoutingModule } from './customer-login-routing.module';
import { CustomerLoginComponent } from './customer-login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomerLoginComponent
  ],
  imports: [
    CommonModule,
    CustomerLoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomerLoginModule { }
