export type SessionIdType = string | null;

export type AuthStateType = {
  session_id: SessionIdType;
};

export type AuthActionType = {
  type: string;
  payload?: SessionIdType;
};
