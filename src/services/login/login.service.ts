import { IUser } from '../../models/user';
import { LoginChannel } from '../../enums/loginchannel';
import { FacebookLoginService } from './fblogin';
import { AppService } from '../app/app.service';
import { LoginConstants } from '../../constants/login.consts';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  private _userObject: IUser;
  private _channel:    LoginChannel;

  constructor(
    private _appService:     AppService,
    private _fbLoginService: FacebookLoginService
  ) {
  }

  isUserLoggedIn(): boolean {
    if ( this._userObject ) {
      return true;
    } else {
      return false;
    }
  }

  userLogin( channel: LoginChannel ): Promise<any> {
    this._channel = channel;
    if ( channel == LoginChannel.Facebook ) {
      return this._fbLoginService.login();
    } else {
      console.log( 'Unsupported Channel for login..' );
      return null;
    }
  }

  userLogout(): Promise<any> {
    if ( this._channel == LoginChannel.Facebook ) {
      console.log( 'Logging out using Facebook..' );
      return this._fbLoginService.logout();
    } else {
      console.log( 'Unsupported Channel for log..' );
      return null;
    }
  }

  getUserInformation(): Promise<any> {
    if ( this._channel == LoginChannel.Facebook ) {
      return this._fbLoginService.getUserInformationFromChannel();
    } else {
      console.log( 'Unsupported Channel for login..' );
      return null;
    }
  }

  setLoggedInUser( user: IUser ) {
    this._userObject = user;
    if( user.channel ) {
      this._channel = user.channel;
    }
  }

  getLoggedInUser(): IUser {
    return this._userObject;
  }

  setUserIdentifier( userId: string ) {
    if ( this._channel == LoginChannel.Facebook ) {
      return this._fbLoginService.setUserId( userId );
    }
  }

  checkUserSavedInStorage(): Promise<any> {
    return this._appService.retrieveFromNativeStorage( LoginConstants.USER_KEY );
  }

  getUserProfilePicURL(): string {
    if ( this._channel == LoginChannel.Facebook ) {
      return this._fbLoginService.getUserProfilePicURL();
    }
  }

  storeUserInfoIntoStorage( userInfo: any ): Promise<any> {
    if ( this._channel == LoginChannel.Facebook ) {
      return this._fbLoginService.storeUserInfoToStorage( userInfo );
    } else {
      console.log( 'Unsupported Channel for login..' );
      console.log( this._channel );
      return null;
    }
  }

  removeUserInfoIntoStorage(): Promise<any> {
    if ( this._channel == LoginChannel.Facebook ) {
      return this._fbLoginService.removeUserInfoToStorage();
    }
  }
}
