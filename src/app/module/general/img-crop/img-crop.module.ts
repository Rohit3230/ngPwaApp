import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgCropComponent } from './img-crop.component';
import { ImgCropRoutingModule } from './img-crop-routing.module';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [
    ImgCropComponent
  ],
  imports: [
    CommonModule,
    ImgCropRoutingModule,
    ImageCropperModule
  ]
})
export class ImgCropModule { }
