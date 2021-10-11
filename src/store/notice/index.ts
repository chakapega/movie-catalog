import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { isShow: boolean; text: string | null } = {
  isShow: false,
  text: null,
};

export const noticeSlice = createSlice({
  name: "notice",
  initialState,
  reducers: {
    showNotice: (state, action: PayloadAction<string>) => {
      state.isShow = true;
      state.text = action.payload;
    },
    hideNotice: (state) => {
      state.isShow = false;
      state.text = null;
    },
  },
});

export const { showNotice, hideNotice } = noticeSlice.actions;

export default noticeSlice.reducer;
