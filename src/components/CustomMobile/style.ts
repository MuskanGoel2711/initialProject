import { StyleSheet } from 'react-native';
import { vh, vw } from '../../utils/Dimensions';
import Colors from '../../utils/colors';
import sizes from '../../utils/sizes';

interface Theme {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
}

export const getStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    phoneInputMobile: {
      flex: 1,
      borderEndEndRadius: 10,
      borderTopEndRadius: 10,
      fontSize: sizes.inputText,
      backgroundColor: theme.backgroundColor,
      overflow: 'hidden',
      marginRight: 2,
      borderColor: 'black'
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: vh(16),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.borderColor,
        backgroundColor: theme.backgroundColor
      },
    telephoneButton: {
      paddingHorizontal: vw(14),
      borderColor: Colors.borderColor,
      borderRightWidth: 1,
      marginRight: vw(4),
    },
    iconStyle: {
      width: vw(20),
      height: vw(20),
      tintColor: Colors.PRIMARY_GRAY,
      resizeMode: 'contain',
    },
    flagButton: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 8
    },
    flagText: {
      fontSize: 18,
      marginRight: 4,
    },
    callingCodeText: {
      fontSize: sizes.inputText,
      color: theme.textColor,
    },
    textInput: {
      flex: 1,
      fontSize: 16,
    },
    errorContainer: {
      borderColor: Colors.RED,
    },
    errorText: {
      color: Colors.RED,
      fontSize: sizes.errorText,
      marginTop: vh(4),
      textAlign: 'left',
    },
    modalContainer: {
      flex: 1,
      padding: 10,
      backgroundColor: "#fff",
    },
    searchTitle: {
      fontWeight: 'bold',
      fontSize: sizes.headerText,
    },
    countryButton: {
      flexDirection: "row",
      alignItems: "center",
      padding: 12,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
    countryText: {
      fontSize: 18,
      marginRight: 8,
    },
    countryName: {
      fontSize: 16,
      color: "#333",
    },
    searchInput: {
      height: 40,
      marginVertical: 10,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: theme.borderColor, 
      borderRadius: 8,
      backgroundColor: theme.backgroundColor, 
      fontSize: sizes.inputText,
      color: theme.textColor, 
    },
    closeButton: {
      marginTop: 16,
      alignItems: "center",
      padding: 12,
      backgroundColor: "#007BFF",
      borderRadius: 8,
    },
    closeButtonText: {
      color: "#fff",
      fontSize: 16,
    },
  })
};