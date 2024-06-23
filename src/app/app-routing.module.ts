import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/sign-in', pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: CustomerLoginComponent
  },
  {
    path: 'otp-verification',
    component: OtpVerificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
