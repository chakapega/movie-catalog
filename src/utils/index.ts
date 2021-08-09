import { LanguageType } from "store/language/types";
import { COUNTRY_CODES } from "constants/language";
import { IMAGE_TMDB_BASE_URL } from "constants/api";

export const getCountryCode = (activeLanguage: LanguageType) =>
  activeLanguage && (COUNTRY_CODES as any)[activeLanguage];

export const getImageUrl = (posterPath: string) => `${IMAGE_TMDB_BASE_URL}/${posterPath}`;
