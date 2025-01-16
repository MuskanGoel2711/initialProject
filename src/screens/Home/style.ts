import { StyleSheet } from "react-native";
import { vw, vh } from "../../utils/Dimensions";
import Colors from "../../utils/colors";
import sizes from "../../utils/sizes";
export const getStyles = (theme: any) => {
    return StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
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
        color: theme.textColor
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
})}