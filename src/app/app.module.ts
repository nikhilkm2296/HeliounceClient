import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HeliounceApp } from './app.component';
import { HomePage } from '../components/home/home.component';
import { SplashAndLoginPage } from '../components/splash-login/splash-login.component';
import { PlacesPage } from '../components/places/places.component';
import { PlaceDetailsPage } from '../components/place-details/place-details.component';
import { AddPlacePage } from '../components/add-place/add-place.component';
import { AppService } from '../services/app/app.service';
import { LoginService } from '../services/login/login.service';
import { FacebookLoginService } from '../services/login/fblogin'
import { HomeService } from '../services/home/home.service';
import { PlaceService } from '../services/places/places.service';

@NgModule({
  imports: [
    IonicModule.forRoot( HeliounceApp )
  ],
  declarations: [
    HeliounceApp,
    SplashAndLoginPage,
    HomePage,
    PlacesPage,
    PlaceDetailsPage,
    AddPlacePage
  ],
  bootstrap: [ IonicApp ],
  entryComponents: [
    HeliounceApp,
    SplashAndLoginPage,
    HomePage,
    PlacesPage,
    PlaceDetailsPage,
    AddPlacePage
  ],
  providers: [ {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    {
      provide: AppService,
      useClass: AppService
    },
    {
      provide: LoginService,
      useClass: LoginService
    },
    {
      provide: FacebookLoginService,
      useClass: FacebookLoginService
    },
    {
      provide: HomeService,
      useClass: HomeService
    },
    {
      provide: PlaceService,
      useClass: PlaceService
    }
  ]
})
export class AppModule {}
