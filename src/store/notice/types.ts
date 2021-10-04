export type NoticeStateType = {
  isShowNotice: boolean;
  text: string | null;
};

export type NoticeActionType = {
  type: string;
  payload: string;
};
