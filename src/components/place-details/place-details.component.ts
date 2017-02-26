import { Component } from '@angular/core';
import { PlaceService } from '../../services/places/places.service';
import { IPlace } from '../../models/place';

@Component({
  templateUrl: '../../pages/place-details/place-details.html'
})
export class PlaceDetailsPage {

  _selPlace:    IPlace;
  _selCategory: number;

  constructor(
    private _placeService: PlaceService,
  ) {
    this._selPlace    = this._placeService.getSelectedPlace();
    this._selCategory = this._placeService.getSelectedCategory();
    console.log( this._selCategory );
  }
}
