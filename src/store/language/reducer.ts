import { SET_LANGUAGE } from "./actionTypes";
import type { LanguageStateType, LanguageActionType } from "./types";

const { REACT_APP_LANGUAGE } = process.env;

const initialState: LanguageStateType = {
  activeLanguage: REACT_APP_LANGUAGE,
  prevActiveLanguage: REACT_APP_LANGUAGE,
};

const languageReducer = (state = initialState, action: LanguageActionType) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, prevActiveLanguage: state.activeLanguage, activeLanguage: action.payload };
    default:
      return state;
  }
};

export default languageReducer;
