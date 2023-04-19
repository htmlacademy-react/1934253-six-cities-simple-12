import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { AxiosInstance } from 'axios';
import { AuthData, OfferCards, OfferCard, UserData, ReviewOfferCards } from '../types/offers';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { loadOffers, checkAuthorization, setError, setDataLoadingStatus, redirectToRoute, setEmail, loadNearbyOffer, loadTargetOffer, loadReviews } from './action';
import { saveToken, dropToken } from '../services/token';
import { store } from './index';


export const clearErrorAction = createAsyncThunk(
  'game/clearError',
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
  async (_arg, {dispatch,getState, extra: api }) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<OfferCards>(APIRoute.Offers);
    dispatch(setDataLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);

export const fetchCurrentOffersAction = createAsyncThunk<void, number | string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/fetchNearbyOffers',
  async (id, {dispatch, getState, extra: api}) => {

    // const {data} = await api.get<OfferCards>(`${APIRoute.Offers}/${(getState().focusCardId).toString()}/nearby`);
    const [offer, nearby, comments] = await Promise.all([
      api.get<OfferCard>(`${APIRoute.Offers}/${(getState().focusCardId).toString()}`),
      api.get<OfferCards>(`${APIRoute.Offers}/${(getState().focusCardId).toString()}/nearby`),
      api.get<ReviewOfferCards>(`${APIRoute.Comments}/${(getState().focusCardId).toString()}`),
    ]);
    dispatch(loadTargetOffer(offer.data));
    dispatch(loadNearbyOffer(nearby.data));
    dispatch(loadReviews(comments.data));
    dispatch(setDataLoadingStatus(false));
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
      dispatch(checkAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(checkAuthorization(AuthorizationStatus.NoAuth));
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
    dispatch(checkAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
    dispatch(setEmail(email));
  },
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
    dispatch(checkAuthorization(AuthorizationStatus.NoAuth));
  },
);

