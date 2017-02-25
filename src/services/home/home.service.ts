import { Injectable } from '@angular/core';
import { IPlaceCategory } from '../../models/placecategory';
import { IMenu } from '../../models/menu';
import { Category } from '../../enums/category';
import { MenuItem } from '../../enums/menuitem';

@Injectable()
export class HomeService {

  getDefaultPlaceCategories(): IPlaceCategory[] {
    let categories = [
      {
        icon: 'compass',
        title: 'Unexplored Places',
        categoryIndex: Category.UNEXPLORED_PLACES
      },
      {
        icon: 'restaurant',
        title: 'Food Addas',
        categoryIndex: Category.FOOD_ADDAS
      },
      {
        icon: 'build',
        title: 'Mechanic Shops',
        categoryIndex: Category.MECHANIC_SHOPS
      },
      {
        icon: 'car',
        title: 'Puncture Shops',
        categoryIndex: Category.PUNCTURE_SHOPS
      }
    ];
    return categories;
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
