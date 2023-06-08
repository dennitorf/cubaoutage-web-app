import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutageRoutingModule } from './outage-routing.module';
import { OutagesComponent } from './outages/outages.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    OutagesComponent
  ],
  imports: [
    CommonModule,
    OutageRoutingModule,
    SharedModule
  ]
})
export class OutageModule { }
