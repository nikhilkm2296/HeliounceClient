import { Component, ViewChild, OnInit } from '@angular/core';
import { Slides } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../components/home/home.component';

@Component({
  templateUrl: '../../pages/add-place/add-place.html'
})
export class AddPlacePage implements OnInit {

   @ViewChild(Slides) slides: Slides;

  constructor( private _navController: NavController ) {
  }

  ngOnInit() {
    this.slides.lockSwipes( true );
  }

  goToNextSlide(): void {
    this.slides.lockSwipes( false );
    this.slides.slideNext();
    this.slides.lockSwipes( true );
  }

  goToHome(): void {
    this._navController.push( HomePage );
  }
}
