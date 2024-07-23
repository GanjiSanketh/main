import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent implements OnInit {
  signInForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      MobileNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
    });
  }

  onSubmit() {
    debugger;
    if (this.signInForm.valid) {
      this.router.navigate(['/otp-verification']);
      //aa
    }
  }
}
