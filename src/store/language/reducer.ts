import { ENGLISH } from "constants/language";
import { SET_LANGUAGE } from "./actionTypes";
import type { LanguageActionType } from "store/types";

const languageState = {
  activeLanguage: ENGLISH,
};

const languageReducer = (state = languageState, action: LanguageActionType) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, activeLanguage: action.payload };
    default:
      return state;
  }
};

export default languageReducer;
