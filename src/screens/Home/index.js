import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomImage from '../../components/CustomArrow';
import { images } from '../../assets';
import { vh, vw } from '../../utils/Dimensions';
import CustomButton from '../../components/CustomButton';
import {getStyles} from './style';
import { useThemeColors } from '../../utils/theme/theme';
import strings from '../../utils/strings';

const HomeScreen = ({ navigation }) => {
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
    <View style={styles.container}>
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

