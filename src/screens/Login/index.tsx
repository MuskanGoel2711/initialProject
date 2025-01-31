import { CommonActions } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Keyboard,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { images } from '../../assets/index';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { login } from '../../redux/config/AuthSlice';
import { facebookLogin } from '../../utils/socialLoginFunctions/facebookAuth';
import { configureGoogleSignIn, handleGoogleSignIn } from '../../utils/socialLoginFunctions/googleAuth';
import strings from '../../utils/strings';
import { useThemeColors } from '../../utils/theme/theme';
import { RootStackParamListLogin } from '../../utils/types';
import { validateEmail, validatePassword } from '../../utils/validations';
import { getStyles } from './style';
import CustomStatus from '../../components/CustomStatus';

type LoginProps = NativeStackScreenProps<RootStackParamListLogin, 'Login'>;

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

  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  const loginOptions = [
    ...(Platform.OS === 'ios'
      ? [{ icon: images.apple, label: strings.ContinueApple(), onPress: () => { } }]
      : []),
    { icon: 'phone-portrait-outline', label: strings.ContinuePhoneNumber(), 
      onPress: () => navigation.navigate('PhoneSignUp'), 
      style: { backgroundColor: 'white' }, 
      textStyle: { color: 'black' } 
    },
    { icon: images.google, label: strings.ContinueGoogle(), 
      onPress: async () => {
        try {
          const userCredential = await handleGoogleSignIn(); 
          dispatch(login());
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'HomeScreen' }],
            })
          );
        } catch (err) {
          console.log("error", err);
        }
      }, 
      style: { backgroundColor: 'white' }, 
      textStyle: { color: 'black' } 
    },
    { icon: images.facebook, label: strings.ContinueFacebook(), 
      onPress: async () => {
        try {
          const userCredential = await facebookLogin(); 
          dispatch(login()); 
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'HomeScreen' }],
            })
          );
        } catch (err) {
          console.log("error", err);
        }
      }, 
      style: { backgroundColor: '#3260a8' }, 
    },
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
      showsVerticalScrollIndicator={false} style={[styles.mainContainer, { paddingTop: insets.top + 10 }]}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={{ flex: 1 }}>
          <CustomStatus />
          <View style={styles.subContainer}>
            <View style={styles.contentHeader}>
              <Text style={styles.headerText}>{strings.SignIn()}</Text>
            </View>
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailText}>
                {strings.Welcome()}
              </Text>
            </View>

            <CustomInput
              name={email}
              label={strings.placeholderEmail()}
              maxLength={50}
              keyboardType={'email-address'}
              onChangeText={handleEmailChange}
              // setName={setEmail}
              Icon={images.email}
              Error={emailError}
              // setError={setEmailError}
              errorText={'Please enter valid email'}
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInputRef.current?.focus();
              }}
            />
            <CustomInput
              forwardRef={passwordInputRef}
              name={password}
              label={strings.placeholderPassword()}
              Icon={images.lock}
              isPassword
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
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default Login;