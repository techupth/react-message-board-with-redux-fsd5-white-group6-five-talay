// TODO: Start Create Slice Here
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  list: [{ text: "Hello all ! This is first message." }],
};

export const messageSlice = createSlice({
  name: "message",
  initialState: initialState,
  reducers: {
    inputMessage: (state, action) => {
      state.input = action.payload;
    },
    addMessage: (state, action) => {
      state.list.push({ text: state.input });
      state.input = "";
    },
    deleteMessage: (state, action) => {
      state.list.splice(action.payload, 1);
    },
  },
});

export const { inputMessage, addMessage, deleteMessage } = messageSlice.actions;
export default messageSlice.reducer;
