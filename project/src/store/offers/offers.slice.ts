import { createSlice } from '@reduxjs/toolkit';
import { SortingValue, DefaultCity, NameSpace } from '../../const';
import { City } from '../../types/offers';
import { Offers } from '../../types/state';

const initialState: Offers = {
  city: DefaultCity,
  sortingValue: SortingValue.popular,
  selectCardId: 0,
};

export const offers = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload as City;
      state.sortingValue = SortingValue.popular;
    },
    sortingOffers: (state, action) => {
      state.sortingValue = action.payload as string;
    },
    selectCard: (state, action) => {
      state.selectCardId = action.payload as number;
    }
  }
});

export const { changeCity, sortingOffers, selectCard } = offers.actions;
