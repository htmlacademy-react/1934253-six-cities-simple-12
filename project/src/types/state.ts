import { store } from '../store/index';
import { City, OfferCard, OfferCards, ReviewOfferCards } from './offers';
import { AuthorizationStatus } from '../const';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type initialStates = {
  focusCardId: number;
  cityOffers: OfferCards;
  city: City;
  filterOffer: string;
  offers: OfferCards;
  error: null | string;
  isLoading: boolean;
  email: string;
  nearbyOffers: OfferCards;
  targetOffer: OfferCard | null;
  reviews: ReviewOfferCards;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: {
    email: string;
    avatarUrl: string;
  };
}

export type Offers = {
  city: City;
  sortingValue: string;
  selectCardId: number;
}
