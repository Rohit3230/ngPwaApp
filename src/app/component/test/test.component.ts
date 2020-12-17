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

}
