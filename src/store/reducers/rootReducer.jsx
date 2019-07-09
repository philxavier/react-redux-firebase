import authReducer from "./authReducer.jsx";
import projectReducer from "./projectReducer.jsx";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
});

export default rootReducer;
