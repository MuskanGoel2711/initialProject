import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { images } from '../../assets';
import CustomImage from '../../components/CustomArrow';
import CustomButton from '../../components/CustomButton';
import strings from '../../utils/strings';
import { useThemeColors } from '../../utils/theme/theme';
import { RootStackParamListHome } from '../../utils/types';
import { getStyles } from './style';

type HomeScreenProps = NativeStackScreenProps<RootStackParamListHome, 'HomeScreen'>;

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
      <StatusBar
                backgroundColor={'transparent'}
                barStyle={'dark-content'}
                translucent={true}
            />
      <View style={styles.topHeader}>
        <CustomImage imageStyle={styles.image} source={images.back} onPress={onBack} />
        <Text style={styles.text}>{strings.HomeScreen()}</Text>
        <CustomImage imageStyle={styles.image} source={images.setting} onPress={onSetting} />
      </View>
      <View style={styles.mainContent}>
        <CustomButton title={strings.AddShipment()} style={styles.buttonContainer} textStyle={styles.buttonText}
          onPress={addShipment}
        />
      </View>
    </View>
  )
}

export default HomeScreen;

