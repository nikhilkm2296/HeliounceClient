import { OnInit, AfterViewInit } from "@angular/core";
import { Platform } from 'ionic-angular';

export class BasePage implements OnInit, AfterViewInit {
  mobileApp: boolean = true;
  platform: Platform;

  constructor() {
    this.platform = new Platform();
    let platforms: Array<string> = this.platform.platforms();
    if ( platforms.length == 0 ) {
      this.mobileApp = false;
    }
  }

  ngOnInit() {
    console.log( 'On init of [ ' + this + ' ].' );
  }

  ngAfterViewInit() {
    console.log( 'After view init of [ ' + this + ' ].' );
  }

  isMobileApp(): boolean {
    return this.mobileApp;
  }
}
