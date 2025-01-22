import { StyleSheet } from "react-native";
import { vw, vh } from "../../utils/Dimensions";
import Colors from "../../utils/colors";
import sizes from "../../utils/sizes";

interface Theme {
    backgroundColor: string;
    textColor: string;
    tintColor: string;
}

export const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: theme.backgroundColor
        },
        topHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        image: {
            width: vw(23),
            height: vh(23),
            tintColor: theme.tintColor
        },
        text: {
            fontSize: sizes.headerText,
            color: theme.textColor,
            fontFamily: "Roboto-Bold"
        },
        mainContent: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        buttonContainer: {
            backgroundColor: Colors.PRIMARY_buttonEnabled,
            borderRadius: 50,
            padding: 20,
        },
        buttonText: {
            color: Colors.PRIMARY_WHITE,
            textAlign: 'center',
            fontWeight: 'bold',
        },
    })
}