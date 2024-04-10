import { combineReducers } from "@reduxjs/toolkit";
import PostSlice from "./PostSlice";
import ThemeSlice from "./ThemeSlice";
import UserSlice from "./UserSlice";

//contain all the slice in a reducer
const Reducer = combineReducers({
  theme: ThemeSlice,
  post: PostSlice,
  user: UserSlice,
});
export default Reducer;
