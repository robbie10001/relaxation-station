import { combineReducers } from "redux";
import recordReducer from "./record_reducer";

// This is our global application state.
export default combineReducers({
  record: recordReducer
});