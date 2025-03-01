import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSideMenuOpen: true,
    isVideosLoading: true,
  },
  reducers: {
    toggleSideMenu: (state) => {
      state.isSideMenuOpen = !state.isSideMenuOpen;
    },
    closeSideMenu: (state) => {
      state.isSideMenuOpen = false;
    },
    addVideosLoading: (state) => {
      state.isVideosLoading = true;
    },
    addVideosNotLoading: (state) => {
      state.isVideosLoading = false;
    },
  },
});

export default appSlice.reducer;
export const {
  toggleSideMenu,
  closeSideMenu,
  addVideosLoading,
  addVideosNotLoading,
} = appSlice.actions;
