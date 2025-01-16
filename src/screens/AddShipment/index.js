import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomImage from '../../components/CustomArrow';
import { images } from '../../assets/index'
import { vw, vh } from '../../utils/Dimensions';
import TopTabs from '../../navigation/TopTabNavigation/index';
import { useThemeColors } from '../../utils/theme/theme';
import { getStyles } from './style';
import strings from '../../utils/strings';

const AddShipment = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const theme = useThemeColors();
    const styles = getStyles(theme);

    const onBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <View style={styles.topHeader}>
                <CustomImage source={images.back} onPress={onBack} imageStyle={styles.icon} />
                <Text style={styles.text}>{strings.AddShipment()}</Text>
            </View>
            <View style={styles.tabsContainer}>
                <TopTabs />
            </View>
        </View>
    )
}

export default AddShipment;

