import { Component, ViewChild, OnInit } from '@angular/core';
import { Slides } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../components/home/home.component';
import { PlaceService } from '../../services/places/places.service';
import {
  Geolocation,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapsLatLng,
  CameraPosition,
  GoogleMapsMarkerOptions,
  GoogleMapsMarker
 } from 'ionic-native';

@Component({
  templateUrl: '../../pages/add-place/add-place.html'
})
export class AddPlacePage implements OnInit {

  @ViewChild( Slides ) slides: Slides;
  private _latitude: number;
  private _longitude: number;

  constructor( private _navController: NavController,
    private _placeService: PlaceService
  ) {
  }

  ngOnInit() {
    this.slides.lockSwipes( true );
    let env = this;
    Geolocation.getCurrentPosition()
    .then( resp => {
      env._latitude  = resp.coords.latitude;
      env._longitude = resp.coords.longitude;
      env.prepareMap();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  prepareMap(): void {
     let element: HTMLElement = document.getElementById('map');
     let map = new GoogleMap( element );
     map.one( GoogleMapsEvent.MAP_READY )
     .then( () => console.log( 'Map is ready!' ) );
     let latLng: GoogleMapsLatLng = new GoogleMapsLatLng(
       this._latitude,
       this._longitude
     );
     let markerOptions: GoogleMapsMarkerOptions = {
       position: latLng,
       title: 'Ionic'
     };
     map.addMarker( markerOptions )
    .then( ( marker: GoogleMapsMarker ) => {
       marker.showInfoWindow();
     });
   }

  goToAskName(): void {
    this.slides.lockSwipes( false );
    this.slides.slideNext();
    this.slides.lockSwipes( true );
  }

  detectLocation(): void {
    this.slides.lockSwipes( false );
    this.slides.slideNext();
    this.slides.lockSwipes( true );
  }

  goToThankYou(): void {
    this.slides.lockSwipes( false );
    this.slides.slideNext();
    this.slides.lockSwipes( true );
  }

  goToHome(): void {
    this._navController.push( HomePage );
  }
}
