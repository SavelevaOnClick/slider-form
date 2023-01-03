import { combineReducers } from '@reduxjs/toolkit';
import {global} from './global'
import {additional} from './additional'
// ADD IMPORT

export const rootReducer = combineReducers({
  global,
  additional,
  // ADD NEW REDUCER
});