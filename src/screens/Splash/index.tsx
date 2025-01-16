import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './style';
import { images } from '../../assets/index';

type RootStackParamList = {
    Tutorial: undefined;
    HomeScreen: undefined;
    LoginScreen: undefined;
};

type SplashScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Tutorial'>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
    const isLoggedIn = useSelector((state: RootState) => state.AuthSlice.isLoggedIn);
    useEffect(() => {
        const checkLoginStatus = async () => {
            setTimeout(() => {
                if (isLoggedIn) {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'LoginScreen' }],
                    });
                } else {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Tutorial' }],
                    });
                }
            }, 2000);
        };

        checkLoginStatus();
    }, [navigation, isLoggedIn]);

    return (
        <View style={styles.MainContainer}>
            <View style={styles.RootView}>
                <View style={styles.ChildView}>
                    <Image source={images.splash} style={styles.gif} resizeMode='contain'/>
                </View>
            </View>
        </View>
    );
};

export default SplashScreen;