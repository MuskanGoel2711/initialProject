import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORE_LANGUAGE_KEY = 'settings.lang';

interface LanguageDetectorPlugin {
    type: 'languageDetector';
    async: boolean;
    init: () => void;
    detect: (callback: (language: string) => void) => Promise<void>;
    cacheUserLanguage: (language: string) => Promise<void>;
}

const languageDetectorPlugin: LanguageDetectorPlugin = {
    type: 'languageDetector',
    async: true,
    init: (): void => { },
    detect: async (callback: (language: string) => void): Promise<void> => {
        try {
            const savedLanguage = await AsyncStorage.getItem(STORE_LANGUAGE_KEY);
            const language = savedLanguage || 'en'; 
            callback(language);
        } catch (error) {
            console.error('Failed to detect language:', error);
            callback('en');
        }
    },
    cacheUserLanguage: async (language: string): Promise<void> => {
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
})
.catch((error) => console.error('i18n initialization error:', error));

export default i18n;
