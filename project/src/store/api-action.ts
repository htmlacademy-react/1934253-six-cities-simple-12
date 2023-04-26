import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { AxiosInstance } from 'axios';
import { AuthData, OfferCards, OfferCard, UserData, ReviewOfferCards, ReviewOfferCard, OffersGroup } from '../types/offers';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { setError } from './data/data.slice';
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
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferCards>(APIRoute.Offers);
    return data;
  }
);

export const fetchCurrentOffersAction = createAsyncThunk<OffersGroup, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentOfferData',
  async (id, { extra: api }) => {
    const [currentOffer, nearbyOffers, comments] = await Promise.all([
      api.get<OfferCard>(`${APIRoute.Offers}/${id}`),
      api.get<OfferCards>(`${APIRoute.Offers}/${id}/nearby`),
      api.get<ReviewOfferCards>(`${APIRoute.Comments}/${id}`),
    ]);
    if (typeof currentOffer.data.id === 'number') {
      return [currentOffer.data, nearbyOffers.data, comments.data];
    }
    return [];
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<string[], AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    return [data.email, data.avatarUrl];
  },
);


export const sendReviewAction = createAsyncThunk<ReviewOfferCards,
  {
    id: ReviewOfferCard['id'];
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
  async ({id, review: comment, rating }, { extra: api }) => {
    const userComment = await api.post<ReviewOfferCards>(
      `${APIRoute.Comments}/${id}`,
      { comment, rating }
    );
    return userComment.data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.LogOut);
    dropToken();
  },
);

