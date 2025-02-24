import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSideMenuOpen: true,
  },
  reducers: {
    toggleSideMenu: (state) => {
      state.isSideMenuOpen = !state.isSideMenuOpen;
    },
  },
});

export default appSlice.reducer;
export const { toggleSideMenu } = appSlice.actions;
