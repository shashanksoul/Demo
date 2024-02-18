import en from './translations/en.json';
import ar from './translations/ar.json';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

const languageResources = {
  en: {translation: en},
  ar: {translation: ar},
};

i18next.use(initReactI18next).init({
  lng: 'ar',
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;
