//we pass only one root reducer function so we have to combine all reducer
import { combineReducers } from "redux";
import changeNumber from "./Reducer1";
import timeNumber from "./Reducer2";
const rootReducer = combineReducers({
    changeNumber,
    timeNumber
})
export default rootReducer;