import { combineReducers } from "redux";

import languageReducer from "./language/reducer";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({
  language: languageReducer,
  auth: authReducer,
});

export default rootReducer;
