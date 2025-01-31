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
    mainContainer: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    subContainer: {
      paddingHorizontal: vw(20),
    },
    contentHeader: {},
    headerText: {
      fontSize: sizes.header,
      fontWeight: 'bold',
      color: theme.textColor,
    },
    detailTextContainer: {
      marginTop: vh(10),
      marginBottom: vh(10),
    },
    detailText: {
      fontSize: sizes.description,
      color: Colors.PRIMARY_GRAY,
    },
    focusedInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: vh(24),
      borderWidth: 1,
      borderRadius: 10,
      borderColor: Colors.RED,
      width: '100%',
    },
    telephoneButton: {
      paddingHorizontal: vw(14),
      borderColor: Colors.borderColor,
      borderRightWidth: 1,
      marginRight: vw(4),
    },

    countryCodeButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    consentContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginTop: vh(15),
      paddingRight: vw(24),
    },
    consentButton: {
      borderRadius: 5,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },
    consentText: {
      lineHeight: vh(19),
      fontSize: sizes.textFlatList,
      color: Colors.PRIMARY_GRAY,
      marginLeft: vw(4),
    },
    uncheckedImg: {
      width: vw(18),
      height: vw(18),
      resizeMode: 'cover',
    },
    disabledButton: {
      backgroundColor: Colors.PRIMARY_WHITE,
      shadowColor: Colors.BLACK,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 3,
      elevation: 5,
    },
    loginContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 23
    },
    accountText: {
      fontSize: sizes.description,
      fontWeight: '400',
      color: Colors.PRIMARY_GRAY,
    },
    loginText: {
      fontSize: sizes.buttonText,
      fontWeight: '600',
      color: Colors.PRIMARY_buttonEnabled,
      paddingLeft: 6
    },
  })};