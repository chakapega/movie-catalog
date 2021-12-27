export enum Language {
  english = "en",
  russian = "ru",
}

export const LANGUAGES = [Language.english, Language.russian];

export const COUNTRY_CODES: {
  [key: string]: string;
} = {
  en: "en-US",
  ru: "ru-RU",
};

export const DEFAULT_LANGUAGE = "en";
