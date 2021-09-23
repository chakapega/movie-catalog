import type { AuthStateType, AuthActionType } from "./types";
import { SAVE_SESSION_ID, DELETE_SESSION_ID } from "./actionTypes";

const initialState: AuthStateType = {
  session_id: null,
};

const authReducer = (state = initialState, action: AuthActionType): AuthStateType => {
  switch (action.type) {
    case SAVE_SESSION_ID:
      return { ...state, session_id: action.payload! };
    case DELETE_SESSION_ID:
      return { ...state, session_id: null };
    default:
      return state;
  }
};

export default authReducer;
