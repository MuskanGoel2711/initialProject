import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  SafeAreaView,
  Platform,
  Dimensions,
  TextInput
} from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/config/AuthSlice';
import { CommonActions } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { getStyles } from './style';
import CustomInputBox from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import CustomPasswordInputBox from '../../components/CustomPassword';
import { validateEmail, validatePassword } from '../../utils/validations';
import { images } from '../../assets/index';
import { useThemeColors } from '../../utils/theme/theme';
import strings from '../../utils/strings';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type RootStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
  SignUp: undefined;
  PhoneSignUp: undefined;
  SignInGoogle: undefined;
  FaceBookLogin: undefined;
};

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const theme = useThemeColors();
  const styles = getStyles(theme);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const passwordInputRef = useRef<TextInput>(null);

  const { height } = Dimensions.get('screen');
  const isSmallDevice = height <= 667;

  const loginOptions = [
    ...(Platform.OS === 'ios'
      ? [{ icon: images.apple, label: strings.ContinueApple(), onPress: () => { } }]
      : []),
    { icon: 'phone-portrait-outline', label: strings.ContinuePhoneNumber(), onPress: () => navigation.navigate('PhoneSignUp'), style: { backgroundColor: 'white' }, textStyle: { color: 'black' } },
    { icon: images.google, label: strings.ContinueGoogle(), onPress: () => navigation.navigate('SignInGoogle'), style: { backgroundColor: 'white' }, textStyle: { color: 'black' } },
    { icon: images.facebook, label: strings.ContinueFacebook(), onPress: () => navigation.navigate('FaceBookLogin'), style: { backgroundColor: '#3260a8' }, },
  ];

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
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

  const handleNext = () => {
    if (!error) {
      dispatch(login())
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'HomeScreen' }],
        })
      );
    }
  };

  const isButtonDisabled = emailError || !validateEmail(email) || passwordError || !validatePassword(password);
  return (
    <KeyboardAwareScrollView
      bounces={false}
      extraHeight={height * (isSmallDevice ? 0.38 : 0.41)}
      showsVerticalScrollIndicator={false} style={[styles.mainContainer, { paddingTop: insets.top }]}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView style={{ flex: 1 }}>
          <StatusBar
            backgroundColor={'transparent'}
            barStyle={'dark-content'}
            translucent={true}
          />
          <View style={styles.subContainer}>
            <View style={styles.contentHeader}>
              <Text style={styles.headerText}>{strings.SignIn()}</Text>
            </View>
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailText}>
                {strings.Welcome()}
              </Text>
            </View>

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
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInputRef.current?.focus();
              }}
            />
            <CustomPasswordInputBox
              forwardRef={passwordInputRef}
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
              returnKeyType="done"
            />
            <TouchableOpacity
              style={styles.forgotPass}
              onPress={() => {
                navigation.navigate('ForgotPassword');
              }}>
              <Text style={styles.forgotPassText}>{strings.forgotPassword()}</Text>
            </TouchableOpacity>

            <CustomButton
              title={strings.SignIn()}
              onPress={handleNext}
              isButtonDisabled={isButtonDisabled}
            />
          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.accountText}>{strings.dontHaveAnAccount()}</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'SignUp' }],
                })
              }>
              <Text style={styles.loginText}>{strings.buttonSignUp()}</Text>
            </TouchableOpacity>
          </View>
          {loginOptions.map((option, index) => (
            <CustomButton
              key={index}
              title={option.label}
              style={option.style}
              onPress={option.onPress}
              iconSource={option.icon}
              textStyle={option.textStyle}
            />
          ))}
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default Login;