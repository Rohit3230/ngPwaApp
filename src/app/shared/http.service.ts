import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    public client:HttpClient
  ) { }

  get(apiUrl:string, retryTimes:number=0): Observable<any> {
    return this.client.get(apiUrl)
    .pipe(
      retry(retryTimes),
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error ${error.statusText || "Unknown"} `
        );
      })
    );
  }
}
