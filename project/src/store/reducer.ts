import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mock/offers';
import { changeCity, selectCard, fillOfferList } from './action';
import { defaultCity } from '../const';
import { initialStates } from '../types/state';


export const initialState: initialStates = {
  city:  defaultCity,
  nearestOffers: offers.filter((offer) => offer.city.name === defaultCity.name),
  focusCardId: null,
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
    });
});
