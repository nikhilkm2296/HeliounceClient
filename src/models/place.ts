import { IUserPlace } from './user';

export interface IPlaceReview {
  byUser:      IUserPlace;
  content:     string;
  timeCreated: string;
}

export interface IPlace {
  name:         string;
  distance:     string;
  ETA:          string;
  addedBy:      IUserPlace;
  noOfLikes:    number;
  noOfDislikes: number;
  reviews:      IPlaceReview[];
  photos:       string[];
}
