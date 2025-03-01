import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./redux/appSlice";
import videoReducer from "./redux/videoSlice";
import searchReducer from "./redux/searchSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    video: videoReducer,
    search: searchReducer,
  },
});

export default store;
