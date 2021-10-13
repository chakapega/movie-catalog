import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SessionIdType } from "./types";

const initialState: { session_id: SessionIdType } = {
  session_id: localStorage.getItem("session_id") || null,
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
  },
});

export const { saveSessionId, removeSessionId } = authSlice.actions;

export default authSlice.reducer;
