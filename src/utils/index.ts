import { COUNTRY_CODES } from "constants/language";
import { LanguageType } from "store/language/types";

export const getCountryCode = (activeLanguage: LanguageType) =>
  activeLanguage && (COUNTRY_CODES as any)[activeLanguage];
