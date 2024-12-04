import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { supportedLanguages } from "./constants";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  supportedLngs: supportedLanguages,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
