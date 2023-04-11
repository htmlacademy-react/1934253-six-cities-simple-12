import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mock/offers';
import { nearestOffers } from '../const';
import { changeCity, fillOfferList } from './action';
import { defaultCity } from '../const';


export const initialState = {
  city: defaultCity,
  nearestOffers: nearestOffers.filter((offer) => offer.city.name === defaultCity.name)
};

export const reducer = createReducer(initialState, (builder) =>{
  builder
    .addCase(changeCity, (state, actions) => {
      if (actions.payload) {
        state.city.name = actions.payload.name;
        state.city.location.latitude = actions.payload.location.latitude;
        state.city.location.longitude = actions.payload.location.longitude;
      }
    })
    .addCase(fillOfferList, (state, action) => {
      if (action.payload) {
        state.nearestOffers = offers.filter((item) => item.city.name === state.city.name);
      }
    });
});
