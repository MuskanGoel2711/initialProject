import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import OtpScreen from '../OtpScreen/index';
import { images } from '../../assets/index';
import { vh, vw } from '../../utils/Dimensions';
import string from '../../utils/strings';
import { useDispatch } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { login } from '../../redux/config/AuthSlice';
import styles from './style';

type RootStackParamList = {
    PhoneSignUp: undefined;
};

type PhoneSignUpProps = NativeStackScreenProps<RootStackParamList, 'PhoneSignUp'>;

const PhoneSignUp: React.FC<PhoneSignUpProps> = ({ navigation }) => {
    const dispatch = useDispatch();
    const insets = useSafeAreaInsets();
    const [confirm, setConfirm] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
    console.log("confirm", confirm);

    async function signInWithPhoneNumber(phoneNumber: string) {
        try {
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
            setConfirm(confirmation);
            
        } catch (error) {
            console.error('Error signing in with phone number:', error);
        }
    }
    const onConfirm = () => {
        dispatch(login())
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'HomeScreen' }],
            })
        );
    }
    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <View style={styles.viewContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.leftContainer}>
                    <Image source={images.back} style={styles.left} />
                </TouchableOpacity>
                <Text style={styles.text}>{string.SignIn()}</Text>
            </View>
            {confirm ? (
                <OtpScreen confirm={onConfirm} />
            ) : (
                <TouchableOpacity
                    onPress={() => signInWithPhoneNumber('+919255265660')}
                    style={styles.buttonContainer}
                >
                    <Text style={styles.buttonText}>Phone Number Sign In</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default PhoneSignUp;


