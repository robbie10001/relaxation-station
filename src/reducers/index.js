import { combineReducers } from "redux";
import recordReducer from "./record_reducer";
import scoreReducer from "./score_reducer";

// This is our global application state.
export default combineReducers({
  score: scoreReducer
});