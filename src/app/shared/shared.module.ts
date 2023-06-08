import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    GoogleMapsModule
  ],
  exports : [
    MatToolbarModule,
    MatIconModule,
    GoogleMapsModule
  ]
})
export class SharedModule { }
