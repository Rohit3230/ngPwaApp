import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-otp',
  templateUrl: './web-otp.component.html',
  styleUrls: ['./web-otp.component.css']
})
export class WebOtpComponent implements OnInit {

  mainObj:any={};
  constructor() { }

  ngOnInit(): void {
  }

  myOTP:any;
  ngAfterViewInit() {
    if ('OTPCredential' in window) {
        this.mainObj.isWebOtpSupported = true;
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
        var reqObj =  {
          otp: { transport:['sms'] },
          signal: ac.signal
      };
        navigator.credentials.get(
          reqObj
        ).then((otp:any) => {
            debugger;
            if(
              otp
            ){
              if(
                otp && otp.code
              ){
                // alert('GOT OTP***'+ otp.code);
                // input.value = otp.code;
                this.myOTP = otp.code;
              }
            }
            
            // if (form) form.submit();
        }).catch(err => {
            debugger;
            console.log(err);
        });
        });
    }else{
      // this.myOTP = 521456;
      this.mainObj.isWebOtpSupported = false;
      // alert('Web OTP API not supported, Please enter manually.');
    }
  }

}
