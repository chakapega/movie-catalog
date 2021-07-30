import { store } from "./";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type LanguageActionType = {
  type: string;
  payload: string;
};
