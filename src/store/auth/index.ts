import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SessionIdType, AccountDetailsType } from "./types";

const initialState: { session_id: SessionIdType; accountDetails: AccountDetailsType } = {
  session_id: localStorage.getItem("session_id") || null,
  accountDetails: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveSessionId: (state, action: PayloadAction<SessionIdType>) => {
      state.session_id = action.payload;
    },
    removeSessionId: (state) => {
      state.session_id = null;
    },
    saveAccountDetails: (state, action: PayloadAction<AccountDetailsType>) => {
      state.accountDetails = action.payload;
    },
    removeAccountDetails: (state) => {
      state.accountDetails = null;
    },
  },
});

export const { saveSessionId, removeSessionId, saveAccountDetails, removeAccountDetails } = authSlice.actions;

export default authSlice.reducer;
