import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  currentUser: {
    id: "",
    name: "",
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
      state.currentUser = payload;
    },
    logout: () => {
      return initialState;
    },
  },
});

export { slice };
