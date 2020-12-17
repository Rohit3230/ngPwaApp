import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    (function () {
      console.log('Started****');
      debugger;
          // if ('OTPCredential' in window) {
              debugger;
              window.addEventListener('DOMContentLoaded', e => {
                  debugger;
              const input = document.querySelector('input[autocomplete="one-time-code"]');
              if (!input) return;
              const ac = new AbortController();
              const form = input.closest('form');
              debugger;
              if (form) {
                  debugger;
                  form.addEventListener('submit', e => {
                  ac.abort();
                  });
              }
              navigator.credentials.get({
                  // otp: { transport:['sms'] },
                  signal: ac.signal
              }).then(otp => {
                  debugger;
                  alert('OTP is***'+otp);
                  // input.value = otp && otp.code ? otp.code : null;
                  if (form) form.submit();
              }).catch(err => {
                  debugger;
                  console.log(err);
              });
              });
          // }else{
          //   debugger;
          //     alert('OTPCredential not found in window object.')
          // }
  
      });

  }

}
