import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./redux/appSlice";
import videoReducer from "./redux/videoSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    video: videoReducer,
  },
});

export default store;
