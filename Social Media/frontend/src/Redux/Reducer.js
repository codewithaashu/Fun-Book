import { combineReducers } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import PostSlice from "./PostSlice";
import ThemeSlice from "./ThemeSlice";

//contain all the slice in a reducer
const Reducer = combineReducers({
  user: UserSlice,
  post: PostSlice,
  theme: ThemeSlice,
});
export default Reducer;
