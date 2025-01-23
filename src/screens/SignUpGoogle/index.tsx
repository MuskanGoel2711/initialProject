import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { images } from '../../assets/index';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './style';

import auth from '@react-native-firebase/auth';

import CustomImage from '../../components/CustomArrow';

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

import strings from '../../utils/strings';
import { useDispatch } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { login } from '../../redux/config/AuthSlice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    SignInGoogle: undefined;
};

type SignInGoogleProps = NativeStackScreenProps<RootStackParamList, 'SignInGoogle'>;

const SignInGoogle: React.FC<SignInGoogleProps> = ({ navigation }) => {
    const dispatch = useDispatch();
    const insets = useSafeAreaInsets();

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '354543572787-tgpd4dsmtf2c95ao5rrgm41lfvfkijjm.apps.googleusercontent.com',
            offlineAccess: false
            // scopes: ['profile', 'email']
        });
    }, []);

    const handleSignup = async () => {
        try {
            const a = await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            console.log('hasplayservices-->', a)

            const response = await GoogleSignin.signIn();

            console.log("12345678-->", response);

            const idToken = response?.data?.idToken;
            console.log("id Token", idToken)

            if (!idToken) {
                throw new Error('No idToken received from Google');
            }
            const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredentials);
            dispatch(login())
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'HomeScreen' }],
                })
            );
        } catch (error) {
            if ((error as Error).message) {
                console.error('Error during Google Sign-In:', error);
            }
            if ((error as { code?: string }).code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('User cancelled the login flow');
            } else if ((error as { code?: string }).code === statusCodes.IN_PROGRESS) {
                console.log('Sign-in operation is in progress');
            } else if ((error as { code?: string }).code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('Google Play Services not available');
            } else {
                console.error('Error during Google Sign-In:', error);
            }
        }
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <View style={styles.viewContainer}>
                {/* <CustomImage onPress={() => navigation.goBack()} style={styles.leftContainer} source={images.back}/> */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.leftContainer}>
                    <Image source={images.back} style={styles.left} resizeMode='contain' />
                </TouchableOpacity>
                <Text style={styles.text}>{strings.SignIn()}</Text>
            </View>
            <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={images.google} style={styles.googleImage} resizeMode='contain' />
                <TouchableOpacity style={styles.buttonContainer} onPress={handleSignup}>
                    <Image source={images.google} style={styles.googleLogo} />
                    <Text style={styles.buttonText}>{strings.ContinueGoogle()}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignInGoogle;