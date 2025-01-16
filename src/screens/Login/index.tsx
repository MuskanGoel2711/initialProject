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
  SafeAreaView,
  Platform
} from 'react-native';
import React, { useState } from 'react';
import { getStyles } from './style';
import CustomInputBox from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import CustomPasswordInputBox from '../../components/CustomPassword';
import { validateEmail, validatePassword } from '../../utils/validations';
import { images } from '../../assets/index';
import { useThemeColors } from '../../utils/theme/theme';
import strings from '../../utils/strings';

interface LoginProps {
  onClose?: any;
  navigation: any;
}

const Login = ({ navigation }: LoginProps) => {
  const theme = useThemeColors();
  const styles = getStyles(theme);

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const loginOptions = [
    ...(Platform.OS === 'ios'
      ? [{ icon: images.google, label: strings.ContinueApple(), onPress: () => { } }]
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
      navigation.navigate('HomeScreen');
    }
  };

  const isButtonDisabled = emailError || !validateEmail(email) || passwordError || !validatePassword(password);
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
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Login;