import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

import { store } from "./";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<typeof store.getState, void, Action>;
