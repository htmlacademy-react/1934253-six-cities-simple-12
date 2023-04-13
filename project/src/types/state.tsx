import { store } from '../store/index';
import { City, OfferCards } from './offers';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type initialStates = {
  focusCardId: number | null;
  nearestOffers: OfferCards;
  city: City;
}
