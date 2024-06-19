import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoginComponent } from './customer-login/customer-login.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/sign-in', pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: CustomerLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
