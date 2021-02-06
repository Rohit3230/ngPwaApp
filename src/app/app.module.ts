import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { WebOtpComponent } from './component/web-otp/web-otp.component';
import { HttpClientModule, HTTP_INTERCEPTORS   } from "@angular/common/http";
import { LoggingInterceptorService } from './shared/logging-interceptor.service';
import { WebcamComponent } from './component/webcam/webcam.component';
// import { TestComponent } from './component/test/test.component';
// import { ImgCropComponent } from './module/general/img-crop/img-crop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WebOtpComponent,
    WebcamComponent
  ],
  imports: [
    FormsModule ,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
