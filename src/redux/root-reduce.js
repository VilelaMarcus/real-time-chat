import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from '../redux/api/api-slice';
import {
  reducer as userReducer,
  slice as userSlice,
} from '../redux/slices/userSlice';
import {
    reducer as chatReducer,
    slice as chatSlicelice,
} from '../redux/slices/chatsSlice';

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    [userSlice]: userReducer,
    [chatSlicelice]: chatReducer,
});

const rootState = rootReducer(undefined, { type: '' });

export { rootReducer, rootState };
