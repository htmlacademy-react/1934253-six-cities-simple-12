import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { dataLoading } from './data/data.slice';
import { userProcess } from './user-process/user-process.slice';
import { offers } from './offers/offers.slice';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataLoading.reducer,
  [NameSpace.Offer]: offers.reducer,
  [NameSpace.User]: userProcess.reducer,
});
