import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  useColorScheme,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { getStyles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Country, CountryCode } from 'react-native-country-picker-modal';
import CustomMobileInputBox from '../../components/CustomMobile';
import CustomInputBox from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import CustomPasswordInputBox from '../../components/CustomPassword';
import {
  validateEmail,
  validateName,
  validatePassword,
} from '../../utils/validations';
import { images } from '../../assets/index';
import DOBPicker from '../../components/CustomDOB';
import { useThemeColors } from '../../utils/theme/theme';
import strings from '../../utils/strings';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  SignUp: undefined;
  VerifyOtp: undefined;
  Login: undefined;
};

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUp = ({ navigation }: SignUpProps) => {
  const theme = useThemeColors();
  const styles = getStyles(theme);

  const [modalVisible, setModalVisible] = useState(false);
  const [countryCode, setCountryCode] = useState<CountryCode>('IN');
  const [callingCode, setCallingCode] = useState('+91');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    if (text.length === 0) {
      setPasswordError(false);
    } else if (validatePassword(text)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };
  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text);
    if (text.length === 0) {
      setConfirmPasswordError(false);
    } else if (text !== password) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCallingCode(`+${country.callingCode[0]}`);
    setPickerVisible(false);
  };
  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (text === '') {
      setEmailError(false);
    } else if (validateEmail(text)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handleFirstNameChange = (text: string) => {
    setFirstName(text);
    if (text === '') {
      setFirstNameError(false);
    } else if (validateName(text)) {
      setFirstNameError(false);
    } else {
      setFirstNameError(true);
    }
  };

  const handleLastNameChange = (text: string) => {
    setLastName(text);
    if (text === '') {
      setLastNameError(false);
    } else if (validateName(text)) {
      setLastNameError(false);
    } else {
      setLastNameError(true);
    }
  };

  const handleNext = () => {
    if (!error) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'VerifyOtp' }]
      })
    }
  };

  const isButtonDisabled =
    phoneNumber.length < 5 ||
    firstNameError ||
    lastNameError ||
    emailError ||
    passwordError ||
    !validateName(firstName) ||
    !validateName(lastName) ||
    !validateEmail(email) ||
    !validatePassword(password);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.mainContainer}>
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <StatusBar
              backgroundColor={'transparent'}
              barStyle={'dark-content'}
              translucent={true}
            />
            <View style={styles.subContainer}>
              <View style={styles.contentHeader}>
                <Text style={styles.headerText}>Create Account</Text>
              </View>
              <View style={styles.detailTextContainer}>
                <Text style={styles.detailText}>
                  Please enter your details to sign up.
                </Text>
              </View>

              <CustomInputBox
                name={firstName}
                label={strings.placeholderFirstName()}
                maxLength={25}
                keyboardType={'name-phone-pad'}
                onChangeText={handleFirstNameChange}
                setName={setFirstName}
                Icon={images.user}
                Error={firstNameError}
                setError={setFirstNameError}
                errorText={
                  'Please use only alphabetical letters and minimum length is 3 characters.'
                }
              />
              <CustomInputBox
                name={lastName}
                label={strings.placeholderLastName()}
                maxLength={25}
                keyboardType="name-phone-pad"
                onChangeText={handleLastNameChange}
                setName={setLastName}
                Icon={images.user}
                Error={lastNameError}
                setError={setLastNameError}
                errorText={
                  'Please use only alphabetical letters and minimum length is 3 characters.'
                }
              />
              <DOBPicker
                label="Date of Birth"
                Icon={images.birthday}
                calendarIcon={images.calendar}
                onDateChange={handleDateChange}
              />
              <CustomInputBox
                name={email}
                label={strings.placeholderEmail()}
                maxLength={50}
                keyboardType={'email-address'}
                onChangeText={handleEmailChange}
                setName={setEmail}
                Icon={images.email}
                Error={emailError}
                setError={setEmailError}
                errorText={'Please enter valid email'}
              />
              <CustomPasswordInputBox
                name={password}
                label={strings.placeholderPassword()}
                Icon={images.lock}
                isPasswordVisible={isPasswordVisible}
                togglePasswordVisibility={togglePasswordVisibility}
                Error={passwordError}
                onChangeText={handlePasswordChange}
                maxLength={50}
                keyboardType="default"
                errorText="Please enter at least one uppercase, lowercase, digit, special character and 8 characters long"
              />
              <CustomPasswordInputBox
                name={confirmPassword}
                label={strings.confirmPassword()}
                Icon={images.lock}
                isPasswordVisible={isConfirmPasswordVisible}
                togglePasswordVisibility={toggleConfirmPasswordVisibility}
                Error={confirmPasswordError}
                onChangeText={handleConfirmPasswordChange}
                maxLength={50}
                keyboardType="default"
                errorText="Passwords do not match"
              />
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
                title={strings.buttonSignUp()}
                onPress={handleNext}
                isButtonDisabled={isButtonDisabled}
              />
            </View>
            <View style={styles.loginContainer}>
              <Text style={styles.accountText}>{strings.alreadyHaveAccount()}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                  })
                }>
                <Text style={styles.loginText}>{strings.buttonLogin()}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default SignUp;