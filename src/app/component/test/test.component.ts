import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../shared/util.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 
  internetStatus : string = '';
  constructor(
    public util:UtilService
  ){}

  ngOnInit(): void {
    console.log('util***', this.util.ngOnInit());
  }

  checkInternetConnectivity(): void{
    console.log('value****',this.util.isConnected);
    if(
      this.util.isConnected
    ){
      this.internetStatus = 'ONLINE';
    }else{
      this.internetStatus = 'OFLINE';
    }
  }




  //******* CODE FOR WEB OTP INTEGRATION */
  myOTP:any;
  ngAfterViewInit() {
    if ('OTPCredential' in window) {
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
                alert('GOT OTP***'+ otp.code);
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
      alert('Web OTP API not supported');
    }
  }
  //******* CODE FOR WEB OTP INTEGRATION */

}
