import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { images } from '../../assets/index';
import CustomImage from '../../components/CustomArrow';
import TopTabs from '../../navigation/TopTabNavigation/index';
import strings from '../../utils/strings';
import { useThemeColors } from '../../utils/theme/theme';
import { RootStackParamListAddShipment } from '../../utils/types';
import { getStyles } from './style';
import CustomStatus from '../../components/CustomStatus';

type AddShipmentScreenProps = NativeStackScreenProps<RootStackParamListAddShipment, 'AddShipment'>;

const AddShipment: React.FC<AddShipmentScreenProps> = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const theme = useThemeColors();
    const styles = getStyles(theme);

    const onBack = () => {
        navigation.goBack();
    }
    return (
        <View style={[styles.container, { paddingTop: insets.top + 20 }]}>
            <CustomStatus />
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

