import { store } from '../store/index';
import { City, OfferCard, OfferCards, ReviewOfferCards } from './offers';
import { AuthorizationStatus } from '../const';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type initialStates = {
  focusCardId: number | string;
  nearestOffers: OfferCards;
  city: City;
  filterOffer: string;
  checkAuthorization: AuthorizationStatus;
  offers: OfferCards;
  error: null | string;
  isDataLoadingStatus: boolean;
  email: string;
  nearbyOffers: OfferCards;
  targetOffer: OfferCard | null;
  reviews: ReviewOfferCards;
}
