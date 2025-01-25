import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Alert, I18nManager, Modal, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import RNRestart from 'react-native-restart';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Switch } from 'react-native-switch';
import { useDispatch, useSelector } from 'react-redux';
import { images } from '../../assets/index';
import CustomImage from '../../components/CustomArrow/index';
import CustomButton from '../../components/CustomButton';
import { logout } from '../../redux/config/AuthSlice';
import { toggleTheme } from '../../redux/config/ThemeSlice';
import i18n from '../../utils/localization/i18n';
import strings from '../../utils/strings';
import { useThemeColors } from '../../utils/theme/theme';
import { RootStackParamListSetting } from '../../utils/types';
import { getStyles } from './style';

type SettingScreenProps = NativeStackScreenProps<RootStackParamListSetting, 'Setting'>;

interface RootState {
    ThemeSlice: {
        themeMode: 'light' | 'dark';
    };
}

interface Language {
    code: string;
    label: string;
}

const Setting: React.FC<SettingScreenProps> = ({ navigation }) => {
    const dispatch = useDispatch();
    const currentTheme = useSelector((state:RootState) => state.ThemeSlice.themeMode)
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const insets = useSafeAreaInsets();

    const theme = useThemeColors();
    const styles = getStyles(theme);

    const goBack = () => {
        navigation.goBack();
    }

    const openLanguageModal = () => {
        setModalVisible(true);
    };

    const closeLanguageModal = () => {
        setModalVisible(false);
    };

    const handleThemeToggle = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light'
        dispatch(toggleTheme(newTheme));
    };

    const handleLogout = async () => {
        Alert.alert('Logout Successfully')
        dispatch(logout());
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          })
        );
      };

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'fr', label: 'French' },
        { code: 'ur', label: 'Urdu' },
        { code: 'ru', label: 'Russian' },
        { code: 'hn', label: 'Hindi' },
    ];

    const handleLanguageSelect = async (language: Language) => {
        setSelectedLanguage(language.label);
        await AsyncStorage.setItem('settings.lang', language.code);
        i18n.changeLanguage(language.code);
        const isRTL = language.code === 'ur';

        if (I18nManager.isRTL !== isRTL) {
            I18nManager.allowRTL(isRTL);
            I18nManager.forceRTL(isRTL);

            setTimeout(() => {
                RNRestart.Restart();
            }, 500);
        }
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top + 12 }]}>
            <StatusBar
                backgroundColor={'transparent'}
                barStyle={'dark-content'}
                translucent={true}
            />
            <View style={styles.topHeader}>
                <CustomImage onPress={goBack} source={images.back} imageStyle={styles.leftArrow} />
                <Text style={styles.text}>{strings.Settings()}</Text>
            </View>
            <TouchableOpacity onPress={openLanguageModal}>
                <Text style={styles.option}>
                    {strings.Language()}
                </Text>
            </TouchableOpacity>
            <View style={styles.toggleContainer}>
                <Text style={styles.option}>
                    {strings.Appearance()}
                </Text>
                <Switch
                    value={currentTheme === 'dark'}
                    onValueChange={handleThemeToggle}
                    disabled={false}
                    renderActiveText={false}
                    renderInActiveText={false}
                    backgroundActive={'green'}
                    backgroundInactive={'gray'}
                />
            </View>
            <CustomButton 
                title={strings.Logout()}
                onPress={handleLogout}
            />
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
            >
                <TouchableOpacity style={styles.modalOverlay} onPress={closeLanguageModal}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>{strings.selectLanguage()}</Text>
                        {languages.map((language) => {
                            const isSelected = language.label === selectedLanguage;
                            return (
                                <TouchableOpacity
                                    key={language.code}
                                    style={[
                                        styles.languageOption,
                                        isSelected && styles.selectedLanguageOption,
                                    ]}
                                    onPress={() => handleLanguageSelect(language)}
                                >
                                    <Text
                                        style={[
                                            styles.languageText,
                                            isSelected && styles.selectedLanguageText,
                                        ]}
                                    >
                                        {language.label}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                        <CustomButton
                            title={strings.close()}
                            onPress={() => setModalVisible(false)}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

export default Setting;

