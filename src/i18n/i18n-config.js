import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { toLower } from 'lodash';
import en from '../assets/translations/en.json';
import it from '../assets/translations/it.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: { translation: en },
  it: { translation: it }
};

export const getTranslation = (father, key) => {
  return resources[i18n.language]
    && resources[i18n.language].translation
    && resources[i18n.language].translation[father]
    && resources[i18n.language].translation[father][key]
    ? resources[i18n.language].translation[father][key]
    : key;
}

export const switchLang = async (lang) => {
  await i18n.changeLanguage(toLower(lang));
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "it",
    resources,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react: {
      transSupportBasicHtmlNodes: true,
    }
  });

export default i18n;
