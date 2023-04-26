import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { dataLoading } from './data/data.slice';
import { userProcess } from './user-process/user-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataLoading.reducer,
  [NameSpace.User]: userProcess.reducer,
});
