import  { loaderReducer,favoriteReducer } from "./reducers";
import { combineReducers } from "redux";
export default combineReducers({loading:loaderReducer,favorites:favoriteReducer})