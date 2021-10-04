import type { NoticeStateType, NoticeActionType } from "./types";
import { SHOW_NOTICE, HIDE_NOTICE } from "./actionTypes";

const initialState: NoticeStateType = {
  isShowNotice: false,
  text: null,
};

const noticeReducer = (state = initialState, action: NoticeActionType) => {
  switch (action.type) {
    case SHOW_NOTICE:
      return { ...state, isShowNotice: true, text: action.payload };
    case HIDE_NOTICE:
      return { ...state, isShowNotice: false, text: null };
    default:
      return state;
  }
};

export default noticeReducer;
