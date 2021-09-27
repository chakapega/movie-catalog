import { combineReducers } from "redux";

import languageReducer from "./language/reducer";
import authReducer from "./auth/reducer";
import accountReducer from "./account/reducer";

const rootReducer = combineReducers({
  language: languageReducer,
  auth: authReducer,
  account: accountReducer,
});

export default rootReducer;
