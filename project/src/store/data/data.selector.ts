import { NameSpace } from '../../const';
import { OfferCard, OfferCards, ReviewOfferCards, City } from '../../types/offers';
import { State } from '../../types/state';

export const getOffers = (state: State): OfferCards => state[NameSpace.Data].offerList.offers;
export const getDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].offerList.isLoading;
export const getCurrentOffer = (state: State): OfferCard | null => state[NameSpace.Data].offer.data;
export const getNearbyOffers = (state: State): OfferCards => state[NameSpace.Data].offer.nearbyOffers;
export const getReviews = (state: State): ReviewOfferCards => state[NameSpace.Data].reviews;
export const getCityOffers = (state: State): OfferCards => state[NameSpace.Data].offerList.cityOffers;
export const getError = (state: State) => state[NameSpace.Data].offer.error;
export const getCity = (state: State): City => state[NameSpace.Data].city;
export const getSortingValue = (state: State) => state[NameSpace.Data].sortingValue;
export const getSelectCardId = (state: State) => state[NameSpace.Data].selectCardId;
