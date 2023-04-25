import { createSlice } from '@reduxjs/toolkit';
import { redirect } from 'react-router-dom';
import { AppRoute, NameSpace } from '../../const';
import { City, OfferCard, OfferCards, ReviewOfferCards } from '../../types/offers';
import { Data } from '../../types/state';
import { setError } from '../action';
import { fetchCurrentOffersAction, fetchOffersAction, sendReviewAction } from '../api-action';
import { DefaultCity, SortingValue } from '../../const';

const initialState: Data = {
  city: DefaultCity,
  isDataLoadingStatus: false,
  offers: [],
  error: null,
  nearbyOffers: [],
  currentOffer: null,
  reviews: [],
  nearestOffers: [],
  sortingValue: ''
};

export const dataLoading = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload as City;
      state.sortingValue = SortingValue.popular;
      state.nearestOffers = (state.offers as OfferCards).filter((offer) => offer.city.name === state.city.name);
    },
    sortingOffers: (state, action) => {
      state.sortingValue = action.payload as string;
      state.nearestOffers = (state.offers as OfferCards).filter((offer) => offer.city.name === state.city.name);

      switch (state.sortingValue) {
        case SortingValue.high:
          state.nearestOffers = state.nearestOffers.sort((a, b) => b.price - a.price);
          break;
        case SortingValue.low:
          state.nearestOffers = state.nearestOffers.sort((a, b) => a.price - b.price);
          break;
        case SortingValue.top:
          state.nearestOffers = state.nearestOffers.sort((a, b) => b.rating - a.rating);
          break;
        default:
          state.nearestOffers = state.offers.filter((offer) => (offer.city.name === state.city.name));
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoadingStatus = true;
      })

      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isDataLoadingStatus = false;
        state.offers = action.payload;
        state.nearestOffers = (state.offers as OfferCards).filter((offer) => offer.city.name === state.city.name);
      })

      .addCase(fetchCurrentOffersAction.pending, (state, action) => {
        state.isDataLoadingStatus = true;
      })

      .addCase(fetchCurrentOffersAction.fulfilled, (state, action) => {
        const [currentOffer, nearbyOffers, comments] = action.payload;
        state.currentOffer = currentOffer as OfferCard;
        state.nearbyOffers = nearbyOffers as OfferCards;
        state.reviews = (comments as ReviewOfferCards).sort((a, b) => {
          if (a.date < b.date) {
            return 1;
          }
          return -1;
        }).slice(0, 10);
        state.isDataLoadingStatus = false;
      })

      .addCase(fetchCurrentOffersAction.rejected, () => {
        // Проверить прb неправльном вводе оффер АйДи
        redirect(AppRoute.Main);
      })
    // sendReviewAction.pending/rejected??????????????
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })

      .addCase(setError, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { changeCity, sortingOffers } = dataLoading.actions;
