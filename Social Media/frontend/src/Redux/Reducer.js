import { combineReducers } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import PostSlice from "./PostSlice";
import ThemeSlice from "./ThemeSlice";

//contain all the slice in a reducer
const Reducer = combineReducers({
  theme: ThemeSlice,
  user: UserSlice,
  post: PostSlice,
});
export default Reducer;
