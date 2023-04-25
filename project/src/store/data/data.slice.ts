import { createSlice } from '@reduxjs/toolkit';
import { redirect } from 'react-router-dom';
import { AppRoute, NameSpace } from '../../const';
import { City, OfferCard, OfferCards, ReviewOfferCards } from '../../types/offers';
import { fetchCurrentOffersAction, fetchOffersAction, sendReviewAction } from '../api-action';
import { DefaultCity, SortingValue } from '../../const';


type State = {

  offer: {
    isLoading: boolean;
    error: null | string;
    data: OfferCard | null;
    nearbyOffers: OfferCards;
  };
  offerList: {
    isLoading: boolean;
    error: null | string;
    offers: OfferCards;
    cityOffers: OfferCards;
  };
  reviews: ReviewOfferCards;
  city: City;
  sortingValue: string;
  selectCardId: number;
}

const initialState: State = {
  offer: {
    isLoading: false,
    error: null,
    data: null, // currentOffer
    nearbyOffers: [],
  },
  offerList: {
    isLoading: false,
    error: null,
    offers: [],
    cityOffers: [],
  },
  city: DefaultCity,
  reviews: [],
  sortingValue: SortingValue.popular,
  selectCardId: 0,
};

export const dataLoading = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload as City;
      state.sortingValue = SortingValue.popular;
      state.offerList.cityOffers = (state.offerList.offers as OfferCards).filter((offer) => offer.city.name === state.city.name);
    },
    setSorting: (state, action) => {
      state.sortingValue = action.payload as string;
      state.offerList.cityOffers = (state.offerList.offers as OfferCards).filter((offer) => offer.city.name === state.city.name);

      switch (state.sortingValue) {
        case SortingValue.high:
          state.offerList.cityOffers = state.offerList.cityOffers.sort((a, b) => b.price - a.price);
          break;
        case SortingValue.low:
          state.offerList.cityOffers = state.offerList.cityOffers.sort((a, b) => a.price - b.price);
          break;
        case SortingValue.top:
          state.offerList.cityOffers = state.offerList.cityOffers.sort((a, b) => b.rating - a.rating);
          break;
        default:
          state.offerList.cityOffers = state.offerList.offers.filter((offer) => (offer.city.name === state.city.name));
      }
    },
    selectCard: (state, action) => {
      state.selectCardId = action.payload as number;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offerList.isLoading = true;
      })

      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offerList.isLoading = false;
        state.offerList.offers = action.payload;
        state.offerList.cityOffers = (state.offerList.offers as OfferCards).filter((offer) => offer.city.name === state.city.name);
      })

      .addCase(fetchCurrentOffersAction.pending, (state, action) => {
        state.offer.isLoading = true;
      })

      .addCase(fetchCurrentOffersAction.fulfilled, (state, action) => {
        const [currentOffer, nearbyOffers, comments] = action.payload;
        state.offer.data = currentOffer as OfferCard;
        state.offer.nearbyOffers = nearbyOffers as OfferCards;
        state.reviews = (comments as ReviewOfferCards).sort((a, b) => {
          if (a.date < b.date) {
            return 1;
          }
          return -1;
        }).slice(0, 10);
        state.offer.isLoading = false;
      })

      .addCase(fetchCurrentOffersAction.rejected, () => {
        // Проверить прb неправльном вводе оффер АйДи
        redirect(AppRoute.Main);
      })
    // sendReviewAction.pending/rejected??????????????
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });

    // .addCase(setError, (state, action) => {
    //   state.error = action.payload;
    // });
  },
});

export const { changeCity,selectCard, setSorting } = dataLoading.actions;
