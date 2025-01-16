import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity} from 'react-native';
import { images } from '../../assets/index';
import { getStyles } from './style';
import CustomButton from '../../components/CustomButton/index';
import { OtpInput } from 'react-native-otp-entry';
import strings from '../../utils/strings'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomImage from '../../components/CustomArrow/index';
import { useThemeColors } from '../../utils/theme/theme';

const OtpScreen = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    // const colorScheme = useColorScheme();
    const [predefinedCode] = useState('1234');
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [enteredCode, setEnteredCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [resendEnabled, setResendEnabled] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [timer, setTimer] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const theme = useThemeColors();
    const styles = getStyles(theme);

    useEffect(() => {
        let timerInterval;
        if (timer > 0) {
            timerInterval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsButtonDisabled(true); 
            setResendEnabled(true);
        }

        return () => clearInterval(timerInterval); 
    }, [timer])

    const handleCodeChange = (code) => {
        setEnteredCode(code);
        setIsButtonDisabled(code.length !== 4 || timer > 0);
    };

    const handleConfirmCode = () => {
        if (enteredCode === predefinedCode) {
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
                navigation.replace('HomeScreen');
            }, 1000);
        } else {
            setAttemptsLeft((prevAttempts) => {
                const remainingAttempts = prevAttempts - 1;
                if (remainingAttempts > 0) {
                    setErrorMessage(
                        `Incorrect code. You have ${remainingAttempts} attempt(s) remaining.`
                    );
                } else {
                    setErrorMessage('Too many failed attempts. Please resend the code.');
                    setResendEnabled(true);
                }
                return remainingAttempts;
            });
        }
    };

    const handleResendCode = () => {
        setAttemptsLeft(3);
        setErrorMessage('');
        setEnteredCode(''); 
        setTimer(30);
        setResendEnabled(false);
        setIsButtonDisabled(true);
    };

    const goBack = () => {
        navigation.goBack();
    };

    const buttonStyle = isButtonDisabled ? styles.buttonDisabled : styles.buttonContainer;

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <CustomImage style={styles.leftIcon} onPress={goBack} imageStyle={styles.leftArrow} source={images.leftArrow}/>
            <Text style={styles.title}>{strings.oTPVerification()}</Text>
            <Text style={styles.subtitle}>{strings.sentMobileNumber()}</Text>
            <Text style={styles.subtitle1}>{strings.number()}</Text>
            <View>
                <OtpInput
                    numberOfDigits={4}
                    focusColor="#2f71a3"
                    placeholder="0000"
                    value={enteredCode}
                    onTextChange={handleCodeChange}
                    theme={{
                        containerStyle: styles.otpContainer,
                        pinCodeContainerStyle: [
                            styles.otpInput,
                            errorMessage ? { borderColor: 'red' } : null,
                        ],
                        pinCodeTextStyle: styles.pinCodeText,

                    }}
                    // containerStyle={styles.otpContainer}
                    // pinCodeContainerStyle={styles.otpContainer}
                    placeholderTextStyle={[
                        styles.otpInput,
                        attemptsLeft < 3 ? { borderColor: 'red' } : null,
                    ]}
                    type="numeric"
                    autoFocus
                />
                {errorMessage && (
                    <View style={styles.errorView}>
                        <Text style={styles.errorText}>{errorMessage}</Text>
                    </View>
                )}
            </View>
            <CustomButton style={buttonStyle} onPress={handleConfirmCode} textStyle={styles.buttonText} title={strings.verifyOTP()} disabled={isButtonDisabled}/>
            <View style={styles.signUpView}>
                <Text style={styles.resend}>{strings.didNotReceive()}</Text>
                <TouchableOpacity style={[
                    styles.resendContainer,
                    resendEnabled ? null : styles.buttonResendDisabled,
                ]} onPress={handleResendCode} disabled={!resendEnabled}>
                    <Text>{strings.buttonResend()}</Text>
                </TouchableOpacity>
            </View>
            {resendEnabled ? "" :
            <View style={styles.timerView}>
                <Text style={styles.timerText}>00:{timer < 10 ? `0${timer}` : timer}</Text>
            </View>}
            <Modal
                animationType="fade"
                visible={showModal}
                transparent
                onRequestClose={() => setShowModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>{strings.successfully()}</Text>
                        <Text style={styles.modalText1}>{strings.successfullyVerified()}</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default OtpScreen;