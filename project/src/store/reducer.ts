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
  filterOffer: filter.top,
};

export const reducer = createReducer(initialState, (builder) =>{
  builder
    .addCase(changeCity, (state, action) => {
      state.city.name = action.payload.name;
      state.city.location.latitude = action.payload.location.latitude;
      state.city.location.longitude = action.payload.location.longitude;
      state.nearestOffers = offers.filter((offer) => offer.city.name === state.city.name);
    })
    .addCase(fillOfferList, (state, action) => {
      if (action.payload) {
        state.nearestOffers = offers.filter((item) => item.city.name === state.city.name);
      }
    })
    .addCase(selectCard, (state, action) => {
      state.focusCardId = action.payload;
    })
    .addCase(filterOffers, (state, action) => {
      state.filterOffer = action.payload;
      state.nearestOffers.sort((a, b) => {
        switch (state.filterOffer) {
          case filter.high:
            return b.price - a.price;
          case filter.low:
            return a.price - b.price;
          case filter.top:
            return b.rating - a.rating;
          default:
            return 0;
        }
      });

    });
});
