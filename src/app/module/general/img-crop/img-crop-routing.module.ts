import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImgCropComponent } from './img-crop.component';

const routes: Routes = [
  { path: '', component: ImgCropComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImgCropRoutingModule { }
