import { createReducer } from '@reduxjs/toolkit';
import { changeCity, selectCard, filterOffers, loadOffers, setError, setDataLoadingStatus, setEmail, loadNearbyOffer, loadTargetOffer, loadReviews } from './action';
import { DefaultCity, SortingValue } from '../const';
import { initialStates } from '../types/state';


export const initialState: initialStates = {
  city:  DefaultCity,
  offers: [],
  cityOffers: [],
  focusCardId: 0,
  filterOffer: SortingValue.popular,
  isLoading: false,
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
      state.cityOffers = state.offers.filter((offer) => offer.city.name === state.city.name);
      state.filterOffer = SortingValue.popular;
    })

    .addCase(selectCard, (state, action) => {
      state.focusCardId = action.payload;
    })

    .addCase(filterOffers, (state, action) => {
      state.filterOffer = action.payload;

      switch (state.filterOffer) {
        case SortingValue.high:
          state.cityOffers = state.cityOffers.sort((a, b) => b.price - a.price);
          break;
        case SortingValue.low:
          state.cityOffers = state.cityOffers.sort((a, b) => a.price - b.price);
          break;
        case SortingValue.top:
          state.cityOffers = state.cityOffers.sort((a, b) => b.rating - a.rating);
          break;
        default:
          state.cityOffers = state.offers.filter((offer) => (offer.city.name === state.city.name));
      }
    })

    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.cityOffers = state.offers.filter((item) => item.city.name === state.city.name);
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
      state.isLoading = action.payload;
    })

    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })

    .addCase (setEmail, (state, action) => {
      state.email = action.payload;
    });
}
);
