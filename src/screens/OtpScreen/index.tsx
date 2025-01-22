import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TextInputProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './style';

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