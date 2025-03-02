import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./redux/appSlice";
import videoReducer from "./redux/videoSlice";
import searchReducer from "./redux/searchSlice";
import liveChatReducer from "./redux/liveChatSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    video: videoReducer,
    search: searchReducer,
    liveChat: liveChatReducer,
  },
});

export default store;
