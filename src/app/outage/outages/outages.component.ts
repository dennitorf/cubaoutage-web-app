import { Component } from '@angular/core';

@Component({
  selector: 'app-outages',
  templateUrl: './outages.component.html',
  styleUrls: ['./outages.component.scss']
})
export class OutagesComponent {

  options: google.maps.MapOptions = {
    center: {lat: 40, lng: -20},
    zoom: 4,
    fullscreenControl: true,    
  };

  centerChange(e : Event) {
    console.log(e);
  }



}
