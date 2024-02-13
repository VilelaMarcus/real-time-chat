import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  currentUser: {
    id: "",
    displayName: "",
    email: "",
    image: "",
  }
}

const slice = 'user';


export const { reducer, actions } = createSlice({
  name: slice ,
  initialState,
  reducers: {
    login: (state,  { payload }) => {
      state.currentUser = { 
      ...payload, 
      id: payload.id
    };
    },
    logout: () => {
      return initialState;
    },
  },
});

export { slice };
