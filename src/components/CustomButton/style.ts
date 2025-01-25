import { StyleSheet } from "react-native";
import { vh , vw} from '../../utils/Dimensions';
import Colors from "../../utils/colors";
import sizes from "../../utils/sizes";

interface Theme {
    shadowColor: string;
    textColor: string;
}

export const Styles = (theme: Theme) =>
    StyleSheet.create({
        disabledButton: {
            backgroundColor: Colors.PRIMARY_WHITE,
            shadowColor: theme.shadowColor,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 3,
            elevation: 5,
        },
        submitButton: {
            backgroundColor: Colors.submitButton,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            width: '85%',
            marginTop: vh(44),
            paddingVertical: vh(16),
            borderRadius: 10,
            shadowColor: theme.textColor,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 3,
            elevation: 5,
        },
        submitButtonText: {
            color: Colors.PRIMARY_WHITE,
            fontSize: sizes.buttonText,
            fontWeight: 'bold',
        },
        disabledButtonText: {
            color: Colors.disabledButtonText,
        },
        contentContainer: {
            // alignItems: 'center',
            // justifyContent: 'center',
        },
        rowContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        iconStyle: {
            width: vw(24),
            height: vh(24),
            marginRight: 8,
        },
    });