import {StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/Dimensions';
import Colors from '../../utils/colors';
import sizes from '../../utils/sizes';

export const getStyles = (theme: any) => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    subContainer: {
      paddingVertical: vh(35),
      paddingHorizontal: vw(20),
    },
    contentHeader: {},
    headerText: {
      fontSize: sizes.headerText,
      fontWeight: 'bold',
      color: theme.textColor,
    },
    detailTextContainer: {
      marginTop: vh(10),
      marginBottom: vh(10),
    },
    detailText: {
      fontSize: sizes.description,
      color: 'gray',
    },
    focusedInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: vh(24),
      borderWidth: 1,
      borderRadius: 10,
      borderColor: 'red',
      width: '100%',
    },
    telephoneButton: {
      paddingHorizontal: vw(14),
      borderColor: '#ccc',
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
      color: 'gray',
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
    },
    accountText: {
      fontSize: sizes.description,
      fontWeight: '400',
      color: 'grey',
    },
    loginText: {
      fontSize: sizes.buttonText,
      fontWeight: '600',
      color: Colors.PRIMARY_buttonEnabled,
      paddingLeft: 6
    },
  })};