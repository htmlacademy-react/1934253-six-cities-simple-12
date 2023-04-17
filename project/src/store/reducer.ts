import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mock/offers';
import { changeCity, selectCard, fillOfferList, filterOffers } from './action';
import { defaultCity, filter } from '../const';
import { initialStates } from '../types/state';


const initialOffers = offers.filter((offer) => offer.city.name === defaultCity.name);
export const initialState: initialStates = {

  city:  defaultCity,
  nearestOffers: initialOffers,
  focusCardId: null,
  filterOffer: filter.popular,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city.name = action.payload.name;
      state.city.location.latitude = action.payload.location.latitude;
      state.city.location.longitude = action.payload.location.longitude;
      state.nearestOffers = offers.filter((offer) => offer.city.name === state.city.name);
      state.filterOffer = filter.popular;
    })

    .addCase(fillOfferList, (state, action) => {
      state.nearestOffers = offers.filter((item) => item.city.name === state.city.name);
    })

    .addCase(selectCard, (state, action) => {
      state.focusCardId = action.payload;
    })

    .addCase(filterOffers, (state, action) => {
      state.filterOffer = action.payload;


      switch (state.filterOffer) {
        case filter.high:
          state.nearestOffers = state.nearestOffers.sort((a, b) => b.price - a.price);
          break;
        case filter.low:
          state.nearestOffers = state.nearestOffers.sort((a, b) => a.price - b.price);
          break;
        case filter.top:
          state.nearestOffers = state.nearestOffers.sort((a, b) => b.rating - a.rating);
          break;
        default:
          state.nearestOffers = offers.filter((offer) => (offer.city.name === state.city.name));
      }
    });

}
);
