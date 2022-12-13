//store create and pass root reducer function

import { createStore } from "redux";
import rootReducer from "../Reducer";

const store = createStore(rootReducer)
export default store;

//actual me use krne ke liye root folder se link krna hoga aur app component ko pass krna hoga.
//createStore()
//dispatch(action)
//getState()