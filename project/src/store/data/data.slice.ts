import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { City, OfferCard, OfferCards, ReviewOfferCards } from '../../types/offers';
import { fetchCurrentOffersAction, fetchOffersAction, sendReviewAction } from '../api-action';
import { DefaultCity, SortingValue } from '../../const';
import { StatusCodes } from 'http-status-codes';


type State = {

  offer: {
    isLoading: boolean;
    error: string;
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
    error: '',
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
    setError: (state, action) => {
      state.offer.error = action.payload as string;
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
        state.reviews = (comments as ReviewOfferCards);
        state.offer.isLoading = false;
      })

      .addCase(fetchCurrentOffersAction.rejected, (state, action) => {
        if (state.reviews === null ) {
          state.offer.error = StatusCodes.NOT_FOUND.toString();
        }
      })

      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload.sort((a, b) => {
          if (a.date < b.date) {
            return 1;
          }
          return -1;
        }).slice(0, 10);
      });
  },
});

export const { setError, changeCity,selectCard, setSorting } = dataLoading.actions;
