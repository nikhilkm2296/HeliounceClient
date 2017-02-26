import { OnInit, Component } from '@angular/core';
import { HomePage } from '../../components/home/home.component';
import { LoginService } from '../../services/login/login.service';
import { LoginChannel } from '../../enums/loginchannel';
import { IUser } from '../../models/user';
import { NavController } from 'ionic-angular';

@Component( {
  templateUrl: '../../pages/splash-login/splash-login.html'
} )
export class SplashAndLoginPage implements OnInit {
  showLoginButtons: boolean = true;
  showSpinner:      boolean = true;
  userLoggedIn:     boolean = true;
  index:            string;

  constructor(
    private _loginService: LoginService,
    private _navController: NavController
  ) {
    var splashIndex = Math.floor( ( Math.random() * 3 ) + 1 );
    this.index      = splashIndex.toString();
  }

  ngOnInit() {
    let env          = this;
    let loginService = this._loginService;
    this._loginService.checkUserSavedInStorage()
    .then(
      function( user: IUser ) {
        console.log( 'User has already logged in.. Saved user details..' );
        console.log( user );
        loginService.setLoggedInUser( user );
        loginService.setUserIdentifier( user.userId );
        setTimeout( function() {
            env._navController.push( HomePage );
          },
          3000
        );
      },
      function( error ) {
        console.log( 'User not logged in..' );
        env.userLoggedIn = false;
        env.showSpinner  = false;
      }
    );
  }

  userLogin( channel: LoginChannel ): void {
    // Login to the Channel
    let loginService = this._loginService;
    let env          = this;
    this._loginService.userLogin( channel )
    .then(
      function( response ) {
        console.log( "User logged in successfully.." );
        let userId = response.authResponse.userID;
        loginService.setUserIdentifier( userId );
        loginService.getUserInformation()
        .then(
          function( userInfo ) {
            userInfo.userPicURL = loginService.getUserProfilePicURL();
            userInfo.userId     = userId;
            loginService.setLoggedInUser( userInfo );
            loginService.storeUserInfoIntoStorage( userInfo )
            .then(
              function( userInfo ) {
                console.log( "User logged in and saved successfully.." );
                env._navController.push( HomePage );
              },
              function( error ) {
                console.log( "User save failed.." );
              }
            );
          },
          function( error ) {
            console.log( "Failed to get user information.." );
          }
        );
      },
      function( error ) {
        console.log( "User login failed.." );
        // TODO: Remove this when creating the app
        env._navController.push( HomePage );
      }
    );
  }
}
