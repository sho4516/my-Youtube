import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "Live chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(...action.payload);
      if (state.messages.length > 20)
        state.messages.splice(0, state.messages.length - 20);
    },
  },
});

export default liveChatSlice.reducer;
export const { addMessage } = liveChatSlice.actions;
