import { store } from '../store/index';
import { City, OfferCard, OfferCards, ReviewOfferCards } from './offers';
import { AuthorizationStatus } from '../const';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type initialStates = {
  focusCardId: number;
  nearestOffers: OfferCards;
  city: City;
  filterOffer: string;
  offers: OfferCards;
  error: null | string;
  isDataLoadingStatus: boolean;
  email: string;
  nearbyOffers: OfferCards;
  targetOffer: OfferCard | null;
  reviews: ReviewOfferCards;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  email: string;
}

export type Data = {
  isDataLoadingStatus: boolean;
  offers: OfferCards;
  error: null | string;
  nearbyOffers: OfferCards;
  currentOffer: OfferCard | null;
  reviews: ReviewOfferCards;
  nearestOffers: OfferCards;
  city: City;
  sortingValue: string;
}

export type Offers = {
  city: City;
  sortingValue: string;
  selectCardId: number;
}
