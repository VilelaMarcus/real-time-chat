import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allGroups: [],
  selectedGroup: "",
  newMessage: ""
};

const slice = 'chat';

export const { reducer, actions } = createSlice({
  name: slice,
  initialState,
  reducers: {
    addGroups: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});


export { slice };