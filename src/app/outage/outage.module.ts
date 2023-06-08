import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutageRoutingModule } from './outage-routing.module';
import { OutagesComponent } from './outages/outages.component';


@NgModule({
  declarations: [
    OutagesComponent
  ],
  imports: [
    CommonModule,
    OutageRoutingModule
  ]
})
export class OutageModule { }
