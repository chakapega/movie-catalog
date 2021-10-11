import { createSlice } from "@reduxjs/toolkit";

const initialState: { isShow: boolean } = {
  isShow: false,
};

export const spinnerSlice = createSlice({
  name: "spinner",
  initialState,
  reducers: {
    showSpinner: (state) => {
      state.isShow = true;
    },
    hideSpinner: (state) => {
      state.isShow = false;
    },
  },
});

export const { showSpinner, hideSpinner } = spinnerSlice.actions;

export default spinnerSlice.reducer;
