export type AccountDetailsType = {
  username: string;
  id: number;
} | null;

export type AccountStateType = {
  accountDetails: AccountDetailsType;
};

export type AccountActionType = {
  type: string;
  payload: AccountDetailsType;
};
