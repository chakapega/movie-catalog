import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "translations/en.json";
import translationRu from "translations/ru.json";

const { REACT_APP_LANGUAGE } = process.env;

const resources = {
  en: {
    translation: translationEn,
  },
  ru: {
    translation: translationRu,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: REACT_APP_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
