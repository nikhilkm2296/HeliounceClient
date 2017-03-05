import { Injectable } from '@angular/core';
import { Facebook } from 'ionic-native';
import { LoginConstants } from '../../constants/login.consts';
import { AppService } from '../app/app.service';
import { LoginChannel } from '../../enums/loginchannel';

@Injectable()
export class FacebookLoginService {

  _userId: string;

  constructor( private _appService: AppService ) {
  }

  login(): Promise<any> {
    return Facebook.login( LoginConstants.FB_PERMISSIONS );
  }


  logout(): Promise<any> {
    return Facebook.logout();
  }

  getUserInformationFromChannel(): Promise<any> {
    let params = new Array();
    let fields = '';
    for( var i = 0; i < LoginConstants.FB_FIELDS.length; i++ ) {
      if ( i == 0 ) {
        fields = LoginConstants.FB_FIELDS[ i ];
      } else {
        fields = fields + ',' + LoginConstants.FB_FIELDS[ i ];
      }
    }
    return Facebook.api( LoginConstants.FB_API_PREFIX + fields, params );
  }

  getUserProfilePicURL(): string {
    return LoginConstants.FB_USER_PIC_PREFIX + this._userId + LoginConstants.FB_USER_PIC_SUFFIX;
  }

  setUserId( userId: string ) {
    this._userId = userId;
  }

  storeUserInfoToStorage( userInfo: any ) {
    return this._appService.storeIntoNativeStorage( LoginConstants.USER_KEY,
      {
        name:        userInfo.name,
        gender:      userInfo.gender,
        picture:     userInfo.picture,
        channel:     LoginChannel.Facebook,
        userId:      userInfo.id,
        userPicURL:  userInfo.userPicURL,
        accessToken: 'SomeToken'
      }
    );
  }

  removeUserInfoToStorage() {
    return this._appService.removeFromNativeStorage( LoginConstants.USER_KEY );
  }
}
