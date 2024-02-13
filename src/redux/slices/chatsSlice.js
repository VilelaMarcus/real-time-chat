import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatId: {},
  ChatName: "",
};

const slice = 'chat';

export const { reducer, actions } = createSlice({
  name: slice,
  initialState,
  reducers: {
    setChat: (state, { payload }) => {
      state.chatId = payload.chatId;
      state.ChatName = payload.ChatName;
    },
  },
});


export { slice };