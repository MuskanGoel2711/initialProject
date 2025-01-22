import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomImage from '../../components/CustomArrow';
import { images } from '../../assets';
import { vh, vw } from '../../utils/Dimensions';
import CustomButton from '../../components/CustomButton';
import {getStyles} from './style';
import { useThemeColors } from '../../utils/theme/theme';
import strings from '../../utils/strings';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  HomeScreen: undefined;
  Setting: undefined;
  AddShipment: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const theme = useThemeColors();
  const styles = getStyles(theme);
  
  const onBack = () => {
    navigation.goBack();
  }
  const onSetting = () => {
    navigation.navigate('Setting')
  }
  const addShipment = () => {
    navigation.navigate('AddShipment')
  }
  return (
    <View style={[styles.container,{paddingTop: insets.top + 10}]}>
      <View style={styles.topHeader}>
        <CustomImage imageStyle={styles.image} source={images.back} onPress={onBack} />
        <Text style={styles.text}>{strings.HomeScreen()}</Text>
        <CustomImage imageStyle={styles.image} source={images.setting} onPress={onSetting} />
      </View>
      <View style={styles.mainContent}>
        <CustomButton title={strings.AddPayment()} style={styles.buttonContainer} textStyle={styles.buttonText}
          onPress={addShipment}
        />
      </View>
    </View>
  )
}

export default HomeScreen;

