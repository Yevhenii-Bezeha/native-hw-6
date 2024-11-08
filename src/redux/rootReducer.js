import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.ts";
import postReducer from "./post/postSlice.ts";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});

export default rootReducer;
