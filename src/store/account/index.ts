import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AccountDetailsType } from "./types";

const initialState: { accountDetails: AccountDetailsType } = {
  accountDetails: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    saveAccountDetails: (state, action: PayloadAction<AccountDetailsType>) => {
      state.accountDetails = action.payload;
    },
    removeAccountDetails: (state) => {
      state.accountDetails = null;
    },
  },
});

export const { saveAccountDetails, removeAccountDetails } = accountSlice.actions;

export default accountSlice.reducer;
