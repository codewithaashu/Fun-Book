import { combineReducers } from "@reduxjs/toolkit";
import PostSlice from "./PostSlice";
import ThemeSlice from "./ThemeSlice";
import UserSlice from "./UserSlice";
import RefreshSlice from "./RefreshSlice";

//contain all the slice in a reducer
const Reducer = combineReducers({
  theme: ThemeSlice,
  post: PostSlice,
  user: UserSlice,
  refresh: RefreshSlice,
});
export default Reducer;
