import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet, useColorScheme } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import NetInfoComp from '../../screens/NetInfoComp';
import { ScreenNames } from '../../utils/screenNames';
import { RootStackParamList } from '../../utils/types';
import Splash from '../../screens/Splash/index';
import Tutorial from '../../screens/Tutorial/index';
import SignUp from '../../screens/SignUp';
import Login from '../../screens/Login/index';
import ForgotPassword from '../../screens/ForgotPassword/index';
import HomeScreen from '../../screens/Home/index';
import AddShipment from '../../screens/AddShipment/index';
import Setting from '../../screens/Setting/index';
import VerifyOtp from '../../screens/VerifyOtp/index';
import PhoneSignUp from '../../screens/PhoneSignUp/index';
import OtpScreen from '../../screens/OtpScreen/index';
import Random from '../../screens/random';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { toggleTheme, setTheme } from '../../redux/config/ThemeSlice';

const Stack = createNativeStackNavigator<RootStackParamList>();

const NativeStack: React.FC = () => {
  const currentSystemTheme = useColorScheme();
  const dispatch = useDispatch();
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem('themeMode');
        if (storedTheme === 'light' || storedTheme === 'dark') {
          dispatch(setTheme(storedTheme));
        } else {
          const theme = currentSystemTheme || 'light';
          dispatch(toggleTheme(theme));
        }
      } catch (error) {
        console.error('Failed to load theme from storage:', error);
      }
    };

    fetchTheme();
  }, [dispatch, currentSystemTheme]);
  useEffect(() => {
    // Fetch initial network state
    NetInfo.fetch().then(state => {
      setIsConnected(state.isConnected);
    });

    // Subscribe to network status updates
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={ScreenNames.Splash} component={Splash} options={{ gestureEnabled: false }} />
          <Stack.Screen name={ScreenNames.Tutorial} component={Tutorial} options={{ gestureEnabled: false }} />
          <Stack.Screen name={ScreenNames.SignUp} component={SignUp} options={{ gestureEnabled: false }} />
          <Stack.Screen name={ScreenNames.Login} component={Login} options={{ gestureEnabled: false }} />
          <Stack.Screen name={ScreenNames.ForgotPassword} component={ForgotPassword} options={{ gestureEnabled: false }} />
          <Stack.Screen name={ScreenNames.HomeScreen} component={HomeScreen} options={{ gestureEnabled: false }} />
          <Stack.Screen name={ScreenNames.AddShipment} component={AddShipment} options={{ gestureEnabled: false }} />
          <Stack.Screen name={ScreenNames.Setting} component={Setting} options={{ gestureEnabled: false }} />
          <Stack.Screen name={ScreenNames.VerifyOtp} component={VerifyOtp} options={{ gestureEnabled: false }} />
          <Stack.Screen name="PhoneSignUp" component={PhoneSignUp} options={{ gestureEnabled: false }} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} options={{ gestureEnabled: false }} />
          <Stack.Screen name={ScreenNames.Random} component={Random} options={{ gestureEnabled: false }} />
        </Stack.Navigator>
        {!isConnected && (
          <View style={styles.overlay}>
            <NetInfoComp isConnected={isConnected} setIsConnected={setIsConnected} />
          </View>
        )}
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
});

export default NativeStack;