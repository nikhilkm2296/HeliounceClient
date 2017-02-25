import { Component } from '@angular/core';
import { PlaceService } from '../../services/places/places.service';
import { IPlace } from '../../models/place';
import { Category } from '../../enums/category';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../components/home/home.component';

@Component( {
  templateUrl: '../../pages/places/places.html'
})
export class PlacesPage {

  selCategory: Category;
  places:      IPlace[];

  constructor( private _placeService: PlaceService, private _navController: NavController ) {
    this.selCategory = this._placeService.getSelectedCategory();
    this.places      = this._placeService.getPlaces();
  }

  goHome(): void {
    this._navController.push( HomePage );
  }

}
