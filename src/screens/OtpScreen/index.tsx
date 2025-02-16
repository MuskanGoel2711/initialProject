import React, { useState } from 'react';
import { StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './style';
import CustomStatus from '../../components/CustomStatus';

interface OtpScreenProps {
    confirm: () => void;
}

const OtpScreen: React.FC<OtpScreenProps> = (props) => {
    const insets = useSafeAreaInsets();
    const [code, setCode] = useState<string>('');

    const confirmCode = async () => {
        try {
            await props.confirm();
        } catch (error) {
            console.log('Invalid code.');
        }
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <CustomStatus />
            <TextInput 
                value={code} 
                onChangeText={(text: string) => setCode(text)} 
                style={styles.input}
                keyboardType="numeric"
                placeholder="Enter OTP"
                placeholderTextColor="#ccc"
            />
            <TouchableOpacity onPress={confirmCode} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>enter otp</Text>
            </TouchableOpacity>
        </View>
    );
};

export default OtpScreen;