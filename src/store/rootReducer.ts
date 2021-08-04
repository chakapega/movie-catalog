import { combineReducers } from "redux";

import languageReducer from "./language/reducer";
import dashboardReducer from "features/Dashboard/Dashboard.reducer";

const rootReducer = combineReducers({
  language: languageReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
