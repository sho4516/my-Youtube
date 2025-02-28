import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: { videos: [] },
  reducers: {
    addVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export default videoSlice.reducer;
export const { addVideos } = videoSlice.actions;
