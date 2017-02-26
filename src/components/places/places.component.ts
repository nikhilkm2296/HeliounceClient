import { Component } from '@angular/core';
import { PlaceService } from '../../services/places/places.service';
import { IPlace } from '../../models/place';
import { Category } from '../../enums/category';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../components/home/home.component';
import { PlaceDetailsPage } from '../../components/place-details/place-details.component';
import { AddPlacePage } from '../../components/add-place/add-place.component';

@Component( {
  templateUrl: '../../pages/places/places.html'
})
export class PlacesPage {

  selCategory: Category;
  places:      IPlace[];

  constructor(
    private _placeService:  PlaceService,
    private _navController: NavController
  ) {
    this.selCategory = this._placeService.getSelectedCategory();
    this.places      = this._placeService.getPlaces();
  }

  goHome(): void {
    this._navController.push( HomePage );
  }

  showPlaceDetails( place: IPlace ): void {
    this._placeService.setSelectedPlace( place );
    this._navController.push( PlaceDetailsPage );
  }

  addPlaceWizard(): void {
    this._navController.push( AddPlacePage );
  }
}
