import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useRef, useState } from 'react';
import {
  Dimensions,
  Keyboard,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { Country, CountryCode } from 'react-native-country-picker-modal';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { images } from '../../assets/index';
import CustomButton from '../../components/CustomButton';
import DOBPicker from '../../components/CustomDOB';
import CustomInputBox from '../../components/CustomInput';
import CustomMobileInputBox from '../../components/CustomMobile';
import CustomPasswordInputBox from '../../components/CustomPassword';
import strings from '../../utils/strings';
import { useThemeColors } from '../../utils/theme/theme';
import {
  validateEmail,
  validateName,
  validatePassword,
} from '../../utils/validations';
import { getStyles } from './style';

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
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  const lastNameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);

  const { height } = Dimensions.get('screen');
  const isSmallDevice = height <= 667;

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const handlePasswordChange = useCallback((text: string) => {
    setPassword(text);
    if (text.length === 0) {
      setPasswordError(false);
    } else if (validatePassword(text)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  }, [password]);
  const handleConfirmPasswordChange = useCallback((text: string) => {
    setConfirmPassword(text);
    if (text.length === 0) {
      setConfirmPasswordError(false);
    } else if (text !== password) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  }, [confirmPassword]);

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

  const handleFirstNameSubmit = () => lastNameRef.current?.focus();
  const handleLastNameSubmit = () => emailRef.current?.focus();
  const handleEmailSubmit = () => passwordRef.current?.focus();
  const handlePasswordSubmit = () => confirmPasswordRef.current?.focus();
  const handleConfirmPasswordSubmit = () => phoneRef.current?.focus();

  const isButtonDisabled =
    phoneNumber.length < 5 ||
    firstNameError ||
    lastNameError ||
    emailError ||
    passwordError ||
    confirmPasswordError ||
    !validateName(firstName) ||
    !validateName(lastName) ||
    !validateEmail(email) ||
    !validatePassword(password) ||
    confirmPassword !== password;
  return (
    <KeyboardAwareScrollView
      bounces={false}
      extraHeight={height * (isSmallDevice ? 0.38 : 0.41)}
      showsVerticalScrollIndicator={false} style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ flex: 1 }}>
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
              returnKeyType="next"
              // onSubmitEditing={handleFirstNameSubmit}
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
              forwardRef={lastNameRef}
              returnKeyType="next"
              // onSubmitEditing={handleLastNameSubmit}
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
              forwardRef={emailRef}
              returnKeyType="next"
              // onSubmitEditing={handleEmailSubmit}
            />
            <CustomPasswordInputBox
              forwardRef={passwordRef}
              name={password}
              label={strings.placeholderPassword()}
              Icon={images.lock}
              isPasswordVisible={isPasswordVisible}
              togglePasswordVisibility={togglePasswordVisibility}
              Error={passwordError}
              onChangeText={handlePasswordChange}
              maxLength={50}
              // keyboardType="default"
              errorText="Please enter at least one uppercase, lowercase, digit, special character and 8 characters long"
              returnKeyType="next"
              // onSubmitEditing={handlePasswordSubmit}
            />
            <CustomPasswordInputBox
              forwardRef={confirmPasswordRef}
              name={confirmPassword}
              label={strings.confirmPassword()}
              Icon={images.lock}
              isPasswordVisible={isConfirmPasswordVisible}
              togglePasswordVisibility={toggleConfirmPasswordVisibility}
              Error={confirmPasswordError}
              onChangeText={handleConfirmPasswordChange}
              maxLength={50}
              // keyboardType="default"
              errorText="Passwords do not match"
              returnKeyType="next"
              // onSubmitEditing={handleConfirmPasswordSubmit}
            />
            <CustomMobileInputBox
              forwardRef={phoneRef}
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
              returnKeyType="done"
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
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;