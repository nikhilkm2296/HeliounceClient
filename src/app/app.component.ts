import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { SplashAndLoginPage } from '../components/splash-login/splash-login.component';

@Component({
  templateUrl: 'app.html'
})
export class HeliounceApp {
  rootPage = SplashAndLoginPage;

  constructor( platform: Platform ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
