import { NativeStorage } from 'ionic-native';
import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { IMenu } from '../../models/menu';
import { MenuItem } from '../../enums/menuitem';

@Injectable()
export class AppService {

  constructor(
    private _platform: Platform
   ) {
  }

  isDeviceMobile(): boolean {
    var isMob = this._platform.is( "mobile" ) ||
    this._platform.is( "mobileweb" ) ||
    this._platform.is( "phablet" );
    return isMob;
  }

  isDeviceTablet(): boolean {
    var isTab = this._platform.is( "tablet" );
    return isTab;
  }

  isDeviceSystem(): boolean {
    var isSys = this._platform.is( "core" );
    return isSys;
  }

  storeIntoNativeStorage( reference: string, value: any ): Promise<any> {
    return NativeStorage.setItem( reference, value );
  }

  retrieveFromNativeStorage( reference: string ): Promise<any> {
    return NativeStorage.getItem( reference );
  }

  removeFromNativeStorage( reference: string ): Promise<any> {
    return NativeStorage.remove( reference );
  }

  clearNativeStorage( reference: string ): Promise<any> {
    return NativeStorage.clear();
  }

  getMenuList(): IMenu[] {
    return [ {
      name: 'Home',
      icon: 'home',
      menuIndex: MenuItem.HOME
    },
    {
      name: 'Profile',
      icon: 'person',
      menuIndex: MenuItem.PROFILE
    },
    {
      name: 'Your Places',
      icon: 'pin',
      menuIndex: MenuItem.YOUR_PLACES
    },
    {
      name: 'Invite',
      icon: 'person-add',
      menuIndex: MenuItem.INVITE
    },
    {
      name: 'Logout',
      icon: 'log-out',
      menuIndex: MenuItem.LOGOUT
    },
    {
      name: 'About',
      icon: 'information-circle',
      menuIndex: MenuItem.ABOUT
    } ]
  }
}
