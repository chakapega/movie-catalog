import type { LanguageStateType, LanguageActionType } from "./types";
import { CHANGE_LANGUAGE } from "./actionTypes";

const { REACT_APP_LANGUAGE } = process.env;

const initialState: LanguageStateType = {
  activeLanguage: REACT_APP_LANGUAGE,
};

const languageReducer = (state = initialState, action: LanguageActionType) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...state, activeLanguage: action.payload };
    default:
      return state;
  }
};

export default languageReducer;
