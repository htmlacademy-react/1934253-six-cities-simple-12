import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { AxiosInstance } from 'axios';
import { AuthData, OfferCards, OfferCard, UserData, ReviewOfferCards, ReviewOfferCard } from '../types/offers';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { loadOffers, authorizationStatus, setError, setDataLoadingStatus, redirectToRoute, setEmail, loadNearbyOffer, loadTargetOffer, loadReviews } from './action';
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

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api }) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<OfferCards>(APIRoute.Offers);
    dispatch(setDataLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);

export const fetchCurrentOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/fetchNearbyOffers',
  async (id, {dispatch, extra: api}) => {
    const [offer, nearby, comments] = await Promise.all([
      api.get<OfferCard>(`${APIRoute.Offers}/${id}`),
      api.get<OfferCards>(`${APIRoute.Offers}/${id}/nearby`),
      api.get<ReviewOfferCards>(`${APIRoute.Comments}/${id}`),
    ]);
    dispatch(loadTargetOffer(offer.data));
    dispatch(loadNearbyOffer(nearby.data));
    dispatch(loadReviews(comments.data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(authorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(authorizationStatus(AuthorizationStatus.NoAuth));
    }
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
    dispatch(authorizationStatus(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
    dispatch(setEmail(email));
  },
);


export const sendReviewAction = createAsyncThunk<
  void,
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
  async (
    { review: comment, rating, id: hotelId },
    { dispatch, extra: api }
  ) => {
    const { data } = await api.post<ReviewOfferCards>(
      `${APIRoute.Comments}/${hotelId}`,
      { comment, rating }
    );
    dispatch(loadReviews(data));
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
    dispatch(authorizationStatus(AuthorizationStatus.NoAuth));
  },
);

