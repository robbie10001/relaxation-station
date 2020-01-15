import { combineReducers } from "redux";
import {reducer as formReducer} from "redux-form"
import scoreReducer from "./score_reducer";

// This is our global application state.
export default combineReducers({
  score: scoreReducer,
  form: formReducer
});