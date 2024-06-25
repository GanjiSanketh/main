import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgOtpInputConfig } from 'ng-otp-input';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.scss']
})
export class OtpVerificationComponent implements OnInit {
  otpForm: any;
  config :NgOtpInputConfig = {
    allowNumbersOnly: false,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: ''
  };
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.otpForm = this.formBuilder.group({
      MobileNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
    });
  }
  onOtpChange($event: any) {

  }
  onSubmit() {

  }
}
