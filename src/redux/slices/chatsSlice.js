import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatId: '',
  ChatName: "",
  image: "",
  chatType: "",
  images : [],
};

const slice = 'chat';

export const { reducer, actions } = createSlice({
  name: slice,
  initialState,
  reducers: {
    setChat: (state, { payload }) => {
      console.log(payload, 'payload')
      state.chatId = payload.chatId;
      state.ChatName = payload.ChatName;
      state.images = payload.images;
      state.image = payload.image;
      state.chatType = payload.chatType;
    },
    setDefaut: (state) => {
      console.log('setDefaut')
      state = {...initialState};
    },
  },
});


export { slice };