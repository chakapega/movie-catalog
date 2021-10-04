import type { SpinnerStateType, SpinnerActionType } from "./types";
import { SHOW_SPINNER, HIDE_SPINNER } from "./actionTypes";

const initialState: SpinnerStateType = {
  isShowSpinner: false,
};

const spinnerReducer = (state = initialState, action: SpinnerActionType) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return { ...state, isShowSpinner: true };
    case HIDE_SPINNER:
      return { ...state, isShowSpinner: false };
    default:
      return state;
  }
};

export default spinnerReducer;
