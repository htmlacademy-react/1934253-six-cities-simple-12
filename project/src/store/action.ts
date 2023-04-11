import { createAction } from '@reduxjs/toolkit';
import { OfferCard,CitiesName } from '../types/offers';

export const changeCity = createAction<CitiesName>('changeCity');
export const fillOfferList = createAction<OfferCard>('fillOfferList');
