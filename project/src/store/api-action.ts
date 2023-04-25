import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { AxiosInstance } from 'axios';
import { AuthData, OfferCards, OfferCard, UserData, ReviewOfferCards, ReviewOfferCard, OfferGroup } from '../types/offers';
import { APIRoute, AppRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { setError, redirectToRoute, setEmail } from './action';
import { saveToken, dropToken } from '../services/token';
import { store } from './index';


export const clearErrorAction = createAsyncThunk(
  'offers/setError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<OfferCards, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferCards>(APIRoute.Offers);
    return data;
  }
);

export const fetchCurrentOffersAction = createAsyncThunk<OfferGroup, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/fetchNearbyOffers',
  async (id, {extra: api}) => {
    const [currentOffer, nearbyOffers, comments] = await Promise.all([
      api.get<OfferCard>(`${APIRoute.Offers}/${id}`),
      api.get<OfferCards>(`${APIRoute.Offers}/${id}/nearby`),
      api.get<ReviewOfferCards>(`${APIRoute.Comments}/${id}`),
    ]);
    return [currentOffer.data, nearbyOffers.data, comments.data];
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
    dispatch(setEmail(email));
  },
);


export const sendReviewAction = createAsyncThunk<ReviewOfferCards,
  {
    id: OfferCard['id'] | 0;
    review: ReviewOfferCard['comment'];
    rating: ReviewOfferCard['rating'];
  },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/sendReview',
  async ({ review, rating, id },{ extra: api }) => {
    const { data } = await api.post<ReviewOfferCards>(
      `${APIRoute.Comments}/${id}`,
      { review, rating }
    );
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.LogOut);
    dropToken();
  },
);

