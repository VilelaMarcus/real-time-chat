import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from '../redux/api/api-slice';
import {
    reducer as userReducer,
    slice as userSlice,
  } from '../redux/slices/userSlice';

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    [userSlice]: userReducer,
});

const rootState = rootReducer(undefined, { type: '' });

export { rootReducer, rootState };
