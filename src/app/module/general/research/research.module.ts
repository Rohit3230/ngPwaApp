import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchComponent } from './research.component';
import { ResearchRoutingModule } from './research-routing.module';
import {WebcamModule} from 'ngx-webcam';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ResearchComponent],
  imports: [
    CommonModule,
    ResearchRoutingModule,
    WebcamModule,
    FormsModule
  ]
})
export class ResearchModule { }
