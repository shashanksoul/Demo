import en from './translations/en.json';
import ar from './translations/ar.json';
import hi from './translations/hi.json';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

const languageResources = {
  en: {translation: en},
  ar: {translation: ar},
  hi: {translation: hi},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;
