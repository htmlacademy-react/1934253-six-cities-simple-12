import { createAction } from '@reduxjs/toolkit';
import { OfferCard, CityName, OfferCards, ReviewOfferCards } from '../types/offers';
import { AppRoute, AuthorizationStatus } from '../const';

export const changeCity = createAction<CityName>('offers/changeCity');

export const fillOfferList = createAction<OfferCard>('offers/fillOfferList');

export const selectCard = createAction<number | string>('offers/selectCard');

export const filterOffers = createAction<string>('offer/filterOffer');

export const loadOffers = createAction<OfferCards>('data/loadOffers');

export const loadNearbyOffer = createAction<OfferCards>('data/loadNearbyOffers');

export const loadTargetOffer = createAction<OfferCard>('data/loadCurrentOffer');

export const loadReviews = createAction<ReviewOfferCards>('data/loadReview');

export const checkAuthorization = createAction<AuthorizationStatus>('user/checkAuthorization');

export const setError = createAction<string | null>('offers/setError');

export const setDataLoadingStatus = createAction<boolean>('data/setQuestionsDataLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('offer/redirectToRoute');

export const setEmail = createAction<string>('user/setEmail');
