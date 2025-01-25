import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/Dimensions";
import Colors from "../../utils/colors";
import sizes from "../../utils/sizes";

interface Theme {
    backgroundColor: string;
    textColor: string;
    tintColor: string;
  }
  

export const getStyles = (theme:Theme)=>{
    return StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: theme.backgroundColor
    },
    topHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 23,
        marginBottom: 20
    },
    text: {
        textAlign: 'center',
        width: '100%',
        fontSize: sizes.header,
        color: theme.textColor
    },
    leftArrow: {
        width: vw(23),
        height: vh(23),
        tintColor: theme.tintColor
    },
    option: {
        fontSize: sizes.textFlatList,
        marginVertical: 10,
        color: theme.textColor
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        // paddingBottom: 40,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: sizes.header,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    languageOption: {
        padding: 15,
        width: '100%',
        alignItems: 'center',
    },
    selectedLanguageOption: {
        backgroundColor: Colors.PRIMARY_buttonEnabled,
    },
    languageText: {
        fontSize: 16,
        color: '#333',
    },
    selectedLanguageText: {
        color: Colors.PRIMARY_WHITE,
        fontFamily: "Montserrat-Italic-VariableFont_wght"
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: Colors.PRIMARY_buttonEnabled,
        padding: 10,
        borderRadius: 5,
        // alignItems: 'center',
    },
    closeButtonText: {
        color: Colors.PRIMARY_WHITE,
        fontSize: sizes.buttonText,
        fontWeight: '600',
    },
})}