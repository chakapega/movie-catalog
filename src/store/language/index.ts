import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DEFAULT_LANGUAGE } from "constants/language";
import { ActiveLanguage } from "./types";

const { REACT_APP_LANGUAGE } = process.env;

const initialState: { activeLanguage: ActiveLanguage } = {
  activeLanguage: localStorage.getItem("activeLanguage") || REACT_APP_LANGUAGE || DEFAULT_LANGUAGE,
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeActiveLanguage: (state, action: PayloadAction<ActiveLanguage>) => {
      state.activeLanguage = action.payload;
    },
  },
});

export const { changeActiveLanguage } = languageSlice.actions;

export default languageSlice.reducer;