import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";

//create a Redux store and contain the reducer in it
const store = configureStore({
  reducer: Reducer,
});
