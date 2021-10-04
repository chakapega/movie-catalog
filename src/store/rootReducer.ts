import { combineReducers } from "redux";

import languageReducer from "./language/reducer";
import authReducer from "./auth/reducer";
import accountReducer from "./account/reducer";
import spinnerReducer from "./spinner/reducer";
import noticeReducer from "./notice/reducer";

const rootReducer = combineReducers({
  language: languageReducer,
  auth: authReducer,
  account: accountReducer,
  spinner: spinnerReducer,
  notice: noticeReducer,
});

export default rootReducer;
