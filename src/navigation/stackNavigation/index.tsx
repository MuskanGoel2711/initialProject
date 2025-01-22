import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddShipment from '../../screens/AddShipment/index';
import HomeScreen from '../../screens/Home/index';
import Setting from '../../screens/Setting/index';
import Splash from '../../screens/Splash/index';
import Tutorial from '../../screens/Tutorial/index';
import Login from '../../screens/Login/index';
import ForgotPassword from '../../screens/ForgotPassword/index';
import VerifyOtp from '../../screens/VerifyOtp/index'
import OtpScreen from '../../screens/OtpScreen/index';
import PhoneSignUp from '../../screens/PhoneSignUp/index';
import FaceBookLogin from '../../screens/FacebookLogin/index';
import SignInGoogle from '../../screens/SignUpGoogle/index';
import { useColorScheme } from 'react-native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { toggleTheme, setTheme } from '../../redux/config/ThemeSlice';
import SignUp from '../../screens/SignUp';
import Random from '../../screens/random';


type RootStackParamList = {
  Splash: undefined;
  Tutorial: undefined;
  Login: undefined;
  HomeScreen: undefined;
  SignUp: undefined;
  Setting: undefined;
  AddShipment: undefined;
  ForgotPassword: undefined;
  VerifyOtp: undefined;
  SignInGoogle: undefined;
  PhoneSignUp: undefined;
  FaceBookLogin: undefined;
  OtpScreen: undefined;
  Random: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const NativeStack: React.FC = () => {
  const currentSystemTheme = useColorScheme();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem('themeMode');
        if (storedTheme) {
          dispatch(setTheme(storedTheme));
        } else {
          dispatch(toggleTheme(currentSystemTheme));
        }
      } catch (error) {
        console.error('Failed to load theme from storage:', error);
      }
    };

    fetchTheme();
  }, [dispatch, currentSystemTheme]);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="VerifyOtp" component={VerifyOtp} options={{ gestureEnabled: false }} /> */}
        {/* <Stack.Screen name="SignUp" component={SignUp} options={{ gestureEnabled: false }} /> */}
        {/* <Stack.Screen name="Login" component={Login} options={{ gestureEnabled: false }} /> */}
        <Stack.Screen name="Splash" component={Splash} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Tutorial" component={Tutorial} options={{ gestureEnabled: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Login" component={Login} options={{ gestureEnabled: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ gestureEnabled: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name="AddShipment" component={AddShipment} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Setting" component={Setting} options={{ gestureEnabled: false }} />
        <Stack.Screen name="VerifyOtp" component={VerifyOtp} options={{ gestureEnabled: false }} />
        <Stack.Screen name="SignInGoogle" component={SignInGoogle} options={{ gestureEnabled: false }} />
        <Stack.Screen name="PhoneSignUp" component={PhoneSignUp} options={{ gestureEnabled: false }} />
        <Stack.Screen name="FaceBookLogin" component={FaceBookLogin} options={{ gestureEnabled: false }} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Random" component={Random} options={{ gestureEnabled: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NativeStack;
