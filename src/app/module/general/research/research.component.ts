import { Component, OnInit } from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { UtilService } from '../../../shared/util.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  // isCameraOpene:boolean = false;
  constructor(
    public util:UtilService
  ) { }

  // ngOnInit(): void {
  // }


  // toggle webcam on/off
  public showWebcam = false;
  public allowCameraSwitch : boolean = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string='';
  public videoOptions: MediaTrackConstraints = {
    width: {ideal: 1024},
    height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: any = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean|string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }

  // openCamera(){
  //   this.isCameraOpene ? this.isCameraOpene = false : this.isCameraOpene = true;
  // }

  // public handleInitError(error: any): void {
  //   if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
  //     console.warn("Camera access was not allowed by user!");
  //   }
  // }

  //*****  code for check internet status */
  internetStatus : string = '';
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
  //*****  code for check internet status */

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
      alert('Web OTP API not supported, Please enter manually.');
    }
  }
  //******* CODE FOR WEB OTP INTEGRATION */


  //*************** CODE FOR IMG CROP */
  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  imageLoaded() {
      /* show cropper */
  }
  cropperReady() {
      /* cropper ready */
  }
  loadImageFailed() {
      /* show message */
  }
  //*************** CODE FOR IMG CROP */

}
