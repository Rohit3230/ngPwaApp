import { Component } from '@angular/core';
import { HttpService } from './shared/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eKyc';
  messages: Array<string> = [];

  constructor(
    public _http:HttpService
  ){}

  ngOnInit(){
    this.getUserInfo();
  }

  getUserInfo(){
    let apiUrl = 'https://api.github.com/users/rohit3230';
    this._http.get(apiUrl, 0)
    .subscribe(
      data => {
        // console.log('userInfo****',JSON.stringify(data));
      },
      error => this.messages.push(error)
    );

    let apiUrl2 = 'https://api.github.co/users/rohit3230';
    this._http.get(apiUrl2, 0)
    .subscribe(
      data => {
        console.log('userInfo2****',JSON.stringify(data));
      },
      error => this.messages.push(error)
    );
  }
}
