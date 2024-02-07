import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from '../redux/api/api-slice';


const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
});

const rootState = rootReducer(undefined, { type: '' });

export { rootReducer, rootState };
