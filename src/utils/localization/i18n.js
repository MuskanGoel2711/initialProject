import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORE_LANGUAGE_KEY = 'settings.lang';

const languageDetectorPlugin = {
    type: 'languageDetector',
    async: true,
    init: () => { },
    detect: async (callback) => {
        try {
            const savedLanguage = await AsyncStorage.getItem(STORE_LANGUAGE_KEY);
            const language = savedLanguage || 'en'; 
            callback(language);
        } catch (error) {
            console.error('Failed to detect language:', error);
            callback('en');
        }
    },
    cacheUserLanguage: async (language) => {
        await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
    },
};

i18n.use(initReactI18next).use(languageDetectorPlugin).init({
    fallbackLng: 'en',
    resources: {
        en: {
            translation: require('../localization/translations/en.json'),
        },
        fr: {
            translation: require('../localization/translations/fr.json'),
        },
        ur: {
            translation: require('../localization/translations/ur.json'), 
        },
        ru: {
            translation: require('../localization/translations/ru.json'), 
        },
        hn: {
            translation: require('../localization/translations/hn.json'),
        }
    },
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
