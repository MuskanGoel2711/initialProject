import { View, Text, StyleSheet, TouchableOpacity, Modal, I18nManager } from 'react-native'
import React, { useState } from 'react';
import { Switch } from 'react-native-switch';
import CustomImage from '../../components/CustomArrow/index';
import { images } from '../../assets/index';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import strings from '../../utils/strings';
import i18n from '../../utils/localization/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import { useThemeColors } from '../../utils/theme/theme';
import { useDispatch, useSelector } from 'react-redux';
import { getStyles } from './style';
import { toggleTheme } from '../../redux/config/ThemeSlice';
import CustomButton from '../../components/CustomButton';

const Setting = ({ navigation }) => {
    const dispatch = useDispatch();
    const currentTheme = useSelector((state) => state.ThemeSlice.themeMode)
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

    const handleLogOut = () => {
        
    }

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'fr', label: 'French' },
        { code: 'ur', label: 'Urdu' },
        { code: 'ru', label: 'Russian' },
        { code: 'hn', label: 'Hindi' },
    ];

    const handleLanguageSelect = async (language) => {
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
                onPress={handleLogOut}
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

