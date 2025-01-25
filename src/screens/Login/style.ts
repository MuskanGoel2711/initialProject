import { StyleSheet } from 'react-native';
import Colors from '../../utils/colors';
import { vh, vw } from '../../utils/Dimensions';
import sizes from '../../utils/sizes';

interface Theme {
  backgroundColor: string;
  textColor: string;
}


export const getStyles = (theme: Theme) => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      // backgroundColor: 'white'
    },
    subContainer: {
      paddingVertical: vh(35),
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
    loginContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
    },
    accountText: {
      fontSize: sizes.textFlatList,
      fontWeight: '400',
      color: Colors.PRIMARY_GRAY
    },
    loginText: {
      fontSize: sizes.buttonText,
      fontWeight: '600',
      color: 'blue',
      paddingLeft: 5
    },
    forgotPass: {
      marginTop: vw(14),
      alignSelf: 'flex-end',
    },
    forgotPassText: {
      fontSize: sizes.buttonText,
      color: '#3797EF',
    }
  })};