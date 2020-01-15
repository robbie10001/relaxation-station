import { combineReducers } from "redux";
import scoreReducer from "./score_reducer";

// This is our global application state.
export default combineReducers({
  score: scoreReducer
});