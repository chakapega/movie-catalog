export type LanguageType = string | undefined;

export type LanguageStateType = {
  activeLanguage: LanguageType;
};

export type LanguageActionType = {
  type: string;
  payload: LanguageType;
};
