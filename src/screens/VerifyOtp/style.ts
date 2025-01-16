import { StyleSheet } from "react-native";
import {vh,vw} from '../../utils/Dimensions'
import Colors from "../../utils/colors";
import sizes from "../../utils/sizes";

export const getStyles = (theme: any) => {
    return StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: theme.backgroundColor
    },
    leftIcon: {
        paddingVertical: 20
    },
    leftArrow: {
        width: 45,
        height: 45,
    },
    title: {
        fontSize: sizes.header,
        fontWeight: 'bold',
        marginBottom: 10,
        color: theme.textColor
    },
    subtitle: {
        fontSize: sizes.description,
        color: theme.textColor
    },
    subtitle1: {
        fontSize: sizes.description,
        fontWeight: 'bold',
        marginBottom: 30,
        color: theme.textColor
    },
    otpContainer: {
        marginBottom: 10,
        paddingHorizontal: 50
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: Colors.PRIMARY_GRAY,
        textAlign: 'center',
        fontSize: sizes.otpInput,
    },
    pinCodeText: {
        fontSize: sizes.buttonText,
        color: theme.textColor
    },
    errorView: {
        alignItems: 'center',
    },
    errorText: {
        color: Colors.RED,
    },
    buttonContainer: {
        backgroundColor: Colors.PRIMARY_buttonEnabled,
        padding: 15,
        marginTop: 60,
        borderRadius: 15,
        marginBottom: 40
    },
    buttonDisabled: {
        backgroundColor: Colors.PRIMARY_GRAY,
        padding: 15,
        marginTop: 60,
        borderRadius: 15,
        marginBottom: 40,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    buttonResendDisabled: {
        color: 'lightBlue'
    },
    buttonText: {
        color: Colors.PRIMARY_WHITE,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: sizes.buttonText
    },
    resend: {
        color: theme.textColor
    },
    resendContainer: {
        paddingLeft: 5
    },
    signUpText: {
        color: Colors.PRIMARY_buttonEnabled,
        fontWeight: 'bold'
    },
    signUpView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timerView:{
        padding: 27
    },
    timerText: {
        textAlign: 'center',
        color: theme.textColor
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        height: '40%',
        backgroundColor: Colors.PRIMARY_WHITE, 
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, 
    },
    modalText: {
        fontSize: sizes.modalText,
        fontWeight: 'bold', 
        textAlign: 'center',
        marginBottom: 10,
    },
    modalText1: {
        color: '#525559'
    }
})};