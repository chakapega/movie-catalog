import type { AccountStateType, AccountActionType } from "./types";
import { DELETE_ACCOUNT_DETAILS, SAVE_ACCOUNT_DETAILS } from "./actionTypes";

const initialState: AccountStateType = {
  accountDetails: null,
};

const accountReducer = (state = initialState, action: AccountActionType): AccountStateType => {
  switch (action.type) {
    case SAVE_ACCOUNT_DETAILS:
      return { ...state, accountDetails: action.payload };
    case DELETE_ACCOUNT_DETAILS:
      return { ...state, accountDetails: initialState.accountDetails };
    default:
      return state;
  }
};

export default accountReducer;
