import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { value: { mssg: "" } };
const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    preMessage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { preMessage } = messageSlice.actions;

export const store = configureStore({
  reducer: {
    message: messageSlice.reducer,
  },
});
