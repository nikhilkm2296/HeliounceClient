import { Injectable } from '@angular/core';
import { IPlace, IPlaceReview } from '../../models/place';
import { IUserPlace } from '../../models/user';
import { Category } from '../../enums/category';

@Injectable()
export class PlaceService {
  _selCategory: Category;
  _selPlace:    IPlace;
  userPicUrl:   string   = 'https://graph.facebook.com/1436380746381163/picture?type=large';
  userNames:    string[] = [ 'User 1', 'User 2', 'User 3', 'User Long Name 4', 'User 5' ];
  placeNames:   string[] = [ 'Place 1', 'Place 2', 'Place 3', 'Place Long Name 4', 'Place 5' ];
  distances:    string[] = [ '1.1 mi', '8.1 mi', '30.11 mi', '15.5 mi', '10 mi' ];
  eta:          string[] = [ '10 mins', '30 mins', '1h 2 mins', '45 mins', '33 mins' ];
  timeCreated:  string[] = [
    '24th Mar 16 4:00 PM',
    '26th Mar 16 6:00 PM',
    '3rd May 16 8:00 PM',
    '24th May 16 2:30 AM',
    '24th May 16 2:30 AM'
  ];
  comment: string = "Place has breathtaking view. Never expected to enjoy so much at his place.\
  Wouldn't mind visiting this again. You can ping me for more details.. Cheers :)";

  getPlaces(): IPlace[] {
    let places = [];
    for( let i=0; i < 5; i++ ) {
      let place = this.getPlace(
        this.placeNames[ i ],
        this.distances[ i ],
        this.eta[ i ],
        this.getUser( this.userNames[ i ], this.userPicUrl ),
        100,
        5,
        this.getReviews( this.userNames[ i ], this.userPicUrl, this.comment, this.timeCreated[ i ] ),
        []
      );
      places.push( place );
    }
    return places;
  }

  getUser(
    name:       string,
    userPicUrl: string
  ): IUserPlace {
    return {
      name: name,
      userPicUrl: userPicUrl
    }
  }

  getReviews(
    name:        string,
    userPicUrl:  string,
    content:     string,
    timeCreated: string
  ): IPlaceReview[] {
    let reviews = [];
    for( let i=0; i < 5; i++ ) {
      reviews.push(
        {
          byUser: {
            name: name,
            userPicUrl: userPicUrl
          },
          content:     content,
          timeCreated: timeCreated
        }
      );
    }
    return reviews;
  }

  getPlace(
    name:         string,
    distance:     string,
    ETA:          string,
    addedBy:      IUserPlace,
    noOfLikes:    number,
    noOfDislikes: number,
    reviews:      IPlaceReview[],
    photos:       string[]
  ): IPlace {
    return {
      name: name,
      distance: distance,
      ETA: ETA,
      addedBy: addedBy,
      noOfLikes: noOfLikes,
      noOfDislikes: noOfDislikes,
      reviews: reviews,
      photos: photos
    };
  }

  setSelectedCategory( category: Category ): void {
    this._selCategory = category;
  }

  getSelectedCategory(): Category {
    return this._selCategory;
  }

  setSelectedPlace( place: IPlace ): void {
    this._selPlace = place;
  }

  getSelectedPlace(): IPlace {
    return this._selPlace;
  }

}
