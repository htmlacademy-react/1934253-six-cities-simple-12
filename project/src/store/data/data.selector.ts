import { NameSpace } from '../../const';
import { OfferCard, OfferCards, ReviewOfferCards, City } from '../../types/offers';
import { State } from '../../types/state';

export const getOffers = (state: State): OfferCards => state[NameSpace.Data].offers;
export const getDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isDataLoadingStatus;
export const getCurrentOffer = (state: State): OfferCard | null => state[NameSpace.Data].currentOffer;
export const getNearbyOffers = (state: State): OfferCards => state[NameSpace.Data].nearbyOffers;
export const getReviews = (state: State): ReviewOfferCards => state[NameSpace.Data].reviews;
export const getNearestOffers = (state: State): OfferCards => state[NameSpace.Data].nearestOffers;
export const getError = (state: State) => state[NameSpace.Data].error;
export const getCity = (state: State): City => state[NameSpace.Data].city;
