import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "",
  list: ["Hello all ! This is first message."],
};
export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    newMessage: (state, action) => {
      state.value = action.payload;
    },
    messageList: (state, action) => {
      state.list.push(state.value);
    },
    deleteMessage: (state, action) => {
      state.list.splice(action.payload, 1);
    },
  },
});

export const { newMessage, messageList, deleteMessage } = messageSlice.actions;
export default messageSlice.reducer;
