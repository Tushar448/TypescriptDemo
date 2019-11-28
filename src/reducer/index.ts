import { combineReducers } from "redux";
import LoginReducer from "./login";
import { characterReducer } from "./characterReducer";
export default combineReducers({ LoginReducer, characterReducer });
