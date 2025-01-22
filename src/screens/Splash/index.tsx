import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './style';
import { images } from '../../assets/index';

type RootStackParamList = {
    Tutorial: undefined;
    HomeScreen: undefined;
    Login: undefined;
};

type SplashScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Tutorial'>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
    // const [loading, setLoading] = useState(true);
    const isLoggedIn = useSelector((state: RootState) => state.AuthSlice.isLoggedIn);
    const isTutorialSeen = useSelector((state: RootState) => state.AuthSlice.isTutorialSeen);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isTutorialSeen) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Tutorial' }],
                });
            } else if (isLoggedIn) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomeScreen' }],
                });
            } else {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                });
            }
        }, 2000);
        return () => clearTimeout(timeout);
    }, [navigation, isLoggedIn, isTutorialSeen]);

    return (
        <View style={styles.MainContainer}>
            <View style={styles.RootView}>
                <View style={styles.ChildView}>
                    <Image source={images.splash} style={styles.gif} resizeMode="contain" />
                </View>
            </View>
        </View>
    );
};

export default SplashScreen;