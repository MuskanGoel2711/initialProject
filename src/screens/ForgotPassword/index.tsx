import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { images } from '../../assets/index';
import CustomImage from '../../components/CustomArrow';
import CustomButton from '../../components/CustomButton/index';
import CustomMobileInputBox from '../../components/CustomMobile/index';
import strings from '../../utils/strings';
import { useThemeColors } from '../../utils/theme/theme';
import { RootStackParamListForgotPassword } from '../../utils/types';
import { getStyles } from './style';
import CustomStatus from '../../components/CustomStatus';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Country = {
  name: string;
  flag: string;
  calling_code: string;
};

type ForgotPasswordProps = NativeStackScreenProps<RootStackParamListForgotPassword, 'ForgotPassword'>;

const ForgotPassword = ({ navigation }: ForgotPasswordProps) => {
  const theme = useThemeColors();
  const styles = getStyles(theme);

  const insets = useSafeAreaInsets();

  const [callingCode, setCallingCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [error, setError] = useState(false);

  const onSelect = (country: any) => {
    console.log('country', country)
    // setCallingCode(`+${country.callingCode}`);
    setCallingCode(country.calling_code)
    setPickerVisible(false);
  };
  
  const handleBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    if (!error) {
      navigation.navigate('VerifyOtp');
    }
  };

  const isButtonDisabled = phoneNumber.length < 5;
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={[styles.mainContainer, { paddingTop: insets.top + 10 }]}>
          <ScrollView style={{ flex: 1 }}>
            <CustomStatus />
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