import { combineReducers } from "redux";

import languageReducer from "./language/reducer";

const rootReducer = combineReducers({
  language: languageReducer,
});

export default rootReducer;
