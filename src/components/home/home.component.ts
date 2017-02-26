import { Component } from '@angular/core';
import { IPlaceCategory } from '../../models/placecategory'
import { IMenu } from '../../models/menu'
import { NavController } from 'ionic-angular';
import { PlacesPage } from '../places/places.component';
import { SplashAndLoginPage } from '../splash-login/splash-login.component';
import { HomeService } from '../../services/home/home.service';
import { LoginService } from '../../services/login/login.service';
import { PlaceService } from '../../services/places/places.service';
import { IUser } from '../../models/user';
import { Category } from '../../enums/category';
import { MenuItem } from '../../enums/menuitem';

@Component({
  templateUrl: '../../pages/home/home.html'
})
export class HomePage {

  categories: IPlaceCategory[];
  menuItems:  IMenu[];
  userObject: IUser;

  constructor(
    private _navController: NavController,
    private _homeService:   HomeService,
    private _loginService:  LoginService,
    private _placeService:  PlaceService
  ) {
    let userObj = this._loginService.getLoggedInUser();
    if( userObj ) {
      console.log( userObj );
      this.userObject = userObj;
    } else {
      //TODO: Remove this
      this.userObject = {
        name: 'Some name',
        userId: '',
        userPicUrl: '',
        gender: 'male',
        channel: 1,
        accessToken: ''
      };
    }
    this.categories = this._homeService.getDefaultPlaceCategories();
    this.menuItems  = this._homeService.getMenuList();
  }

  fireCategorySelectedAction( categoryIndex: Category ) {
    this._placeService.setSelectedCategory( categoryIndex );
    this._navController.push( PlacesPage );
  }

  itemSelected( menuIndex: MenuItem ): void {
    if ( menuIndex == MenuItem.LOGOUT ) {
      this.doLogout();
    }
  }

  doLogout(): void {
    let navController = this._navController;
    let loginService  = this._loginService;
    let logout = this._loginService.userLogout()
    console.log( logout );
    logout.then(
      function( response ) {
        console.log( 'Logged out from FB successfully..' );
        loginService.removeUserInfoIntoStorage()
        .then(
          function( response ) {
            console.log( 'Removed the user from storage..' );
            navController.setRoot( SplashAndLoginPage );
          },
          function( error ) {
            console.log( 'Failed to remove the user from storage..' );
          }
        );
      },
      function( error ) {
        console.log( error );
        console.log( 'Failed to logout..' );
      }
    );
  }

}
