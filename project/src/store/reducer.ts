import { createReducer } from '@reduxjs/toolkit';
// import { offers } from '../mock/offers';
import { changeCity, selectCard, filterOffers, loadOffers, authorizationStatus, setError, setDataLoadingStatus, setEmail, loadNearbyOffer, loadTargetOffer, loadReviews } from './action';
import { defaultCity, sorting, AuthorizationStatus } from '../const';
import { initialStates } from '../types/state';


export const initialState: initialStates = {
  city:  defaultCity,
  offers: [],
  nearestOffers: [],
  focusCardId: 0,
  filterOffer: sorting.popular,
  isDataLoadingStatus: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  email: '',
  nearbyOffers: [],
  targetOffer: null,
  reviews: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city.name = action.payload.name;
      state.city.location.latitude = action.payload.location.latitude;
      state.city.location.longitude = action.payload.location.longitude;
      state.nearestOffers = state.offers.filter((offer) => offer.city.name === state.city.name);
      state.filterOffer = sorting.popular;
    })

    .addCase(selectCard, (state, action) => {
      state.focusCardId = action.payload;
    })

    .addCase(filterOffers, (state, action) => {
      state.filterOffer = action.payload;

      switch (state.filterOffer) {
        case sorting.high:
          state.nearestOffers = state.nearestOffers.sort((a, b) => b.price - a.price);
          break;
        case sorting.low:
          state.nearestOffers = state.nearestOffers.sort((a, b) => a.price - b.price);
          break;
        case sorting.top:
          state.nearestOffers = state.nearestOffers.sort((a, b) => b.rating - a.rating);
          break;
        default:
          state.nearestOffers = state.offers.filter((offer) => (offer.city.name === state.city.name));
      }
    })

    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.nearestOffers = state.offers.filter((item) => item.city.name === state.city.name);
    })

    .addCase(loadTargetOffer, (state, action) => {
      state.targetOffer = action.payload;
    })

    .addCase(loadNearbyOffer, (state, action) => {
      state.nearbyOffers = action.payload;
    })

    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
      state.reviews = state.reviews.sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        }
        return -1;
      }).slice(0, 10);
    })

    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoadingStatus = action.payload;
    })

    .addCase(authorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;

    })

    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })

    .addCase (setEmail, (state, action) => {
      state.email = action.payload;
    });
}
);
