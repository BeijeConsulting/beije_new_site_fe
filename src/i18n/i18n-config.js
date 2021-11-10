import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { toLower } from 'lodash';
import gb from '../assets/translations/gb.json';
import it from '../assets/translations/it.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  gb: {translation: gb},
  it: {translation: it}
};

export const getTranslation = (father, key) => {
  return resources[i18n.language] 
          && resources[i18n.language].translation
          && resources[i18n.language].translation[father]
          && resources[i18n.language].translation[father][key]
          ? resources[i18n.language].translation[father][key]
          : key;
}

export const switchLang = (lang) => {
  i18n.changeLanguage(toLower(lang));
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
      fallbackLng: "gb",
      resources,
      interpolation: {
          escapeValue: false // react already safes from xss
      }
  });

export default i18n;
