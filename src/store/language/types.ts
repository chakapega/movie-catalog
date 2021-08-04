export type LanguageType = string | undefined;

export type LanguageStateType = {
  activeLanguage: LanguageType;
  prevActiveLanguage: LanguageType;
};

export type LanguageActionType = {
  type: string;
  payload?: LanguageType;
};
