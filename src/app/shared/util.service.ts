import { Injectable } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public isConnected : boolean = window && window.navigator && window.navigator.onLine ? window.navigator.onLine : true;

  constructor(
    private connectionService:ConnectionService
  ) { }

    /**
   * Initialise the methods that are constant for the deployment
   */
  ngOnInit() {
    this.internetConnected();
  }

  internetConnected(){
    this.connectionService.monitor().subscribe(isConnected => {
      return this.isConnected = isConnected; 
    });
  }

  add(a: number, b: number): number {
    return a + b;
  }



}
