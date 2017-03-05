import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { SplashAndLoginPage } from '../components/splash-login/splash-login.component';
import { IMenu } from '../models/menu'

@Component({
  templateUrl: 'app.html'
})
export class HeliounceApp {
  menuItems:  IMenu[] = [];
  rootPage = SplashAndLoginPage;

  constructor( platform: Platform,
    menuController: MenuController
   ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      menuController.enable( false, 'myMenu' );
    });
  }
}
