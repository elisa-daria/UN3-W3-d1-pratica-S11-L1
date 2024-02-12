import { configureStore } from "@reduxjs/toolkit";
import firstReducer from "../reducers";

const store = configureStore({
  reducer: firstReducer,
});
export default store;
