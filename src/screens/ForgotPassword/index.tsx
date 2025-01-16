import {
  StatusBar,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import { getStyles } from './style';
import { CountryCode } from 'react-native-country-picker-modal';
import CustomMobileInputBox from '../../components/CustomMobile/index';
import CustomButton from '../../components/CustomButton/index';
import { images } from '../../assets/index';
import CustomImage from '../../components/CustomArrow';
import { useThemeColors } from '../../utils/theme/theme';
import strings from '../../utils/strings';

interface ForgotPasswordProps {
  onClose?: any;
  navigation: any;
}

const ForgotPassword = ({ navigation }: ForgotPasswordProps) => {
  const theme = useThemeColors();
  const styles = getStyles(theme);

  const [countryCode, setCountryCode] = useState<CountryCode>('IN');
  const [callingCode, setCallingCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [error, setError] = useState(false);

  const onSelect = (country: any) => {
    setCountryCode(country.cca2);
    setCallingCode(`+${country.callingCode[0]}`);
    setPickerVisible(false);
  };
  const handleBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    if (!error) {
      navigation.navigate('VerifyOtp');
      // navigation.navigate('Home')
    }
  };

  const isButtonDisabled = phoneNumber.length < 5;
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.mainContainer}>
          <ScrollView style={{ flex: 1 }}>
            <StatusBar
              backgroundColor={'transparent'}
              barStyle={'dark-content'}
              translucent={true}
            />
            <View style={styles.subContainer}>
              <CustomImage source={images.back} imageStyle={styles.Left} style={styles.backButton} onPress={handleBack} />
              <View style={styles.contentHeader}>
                <Text style={styles.headerText}>{strings.forgotPassword()}</Text>
              </View>
              <View style={styles.detailTextContainer}>
                <Text style={styles.detailText}>
                  {strings.NoWorries()}
                </Text>
              </View>
              <CustomMobileInputBox
                label={strings.placeholderPhone()}
                countryCode={countryCode}
                callingCode={callingCode}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                onSelect={onSelect}
                setPickerVisible={setPickerVisible}
                Icon={images.telephone}
                error={error}
                setError={setError}
                errorText={'Mobile no. should be min 5 digit and max 13 digit.'}
              />
              <CustomButton
                title={strings.verifyOTP()}
                onPress={handleNext}
                isButtonDisabled={isButtonDisabled}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};
export default ForgotPassword;