import { NativeStorage } from 'ionic-native';
import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';

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

}
