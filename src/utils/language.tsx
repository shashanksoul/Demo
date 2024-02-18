import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from './../localization';

const STORE_LANGUAGE_KEY = 'settings.lang';
export const updateSavedLng = async () => {
  try {
    const language = await AsyncStorage.getItem(STORE_LANGUAGE_KEY);
    if (language) {
      i18next.changeLanguage(language);
    }
  } catch (err) {
    console.log(`Language reading error: ${err}`);
  }
};

export const saveCurrentLng = async (lng: string) => {
  try {
    await AsyncStorage.setItem(STORE_LANGUAGE_KEY, lng);
  } catch (err) {
    console.log(`Language saving error: ${err}`);
  }
};
