import { createAction } from '@reduxjs/toolkit';
import { OfferCard,CityName } from '../types/offers';

export const changeCity = createAction<CityName>('changeCity');
export const fillOfferList = createAction<OfferCard>('fillOfferList');
export const selectCard = createAction<number | null>('selectCard');
export const filterOffers = createAction<string>('filter/filterOffer');
