import {PayloadAction} from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import {Middleware} from 'redux';
import {reducer} from '../reducer';

type Reducer = ReturnType<typeof reducer>;

const OFFER_REDIRECT = 'offer/redirectToRoute';

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === OFFER_REDIRECT) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
