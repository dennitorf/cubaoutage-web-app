import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cubaoutage-web-app';

  displayingHomeScreen : boolean = true

  constructor(private router : Router, private route : ActivatedRoute) {
    let url = router.url;
    this.displayingHomeScreen = url == "/";

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.displayingHomeScreen = event.url == "/";
      }              
    })
  }
}
