import { StyleSheet } from 'react-native';
import { vw } from '../../utils/Dimensions';
import Colors from '../../utils/colors';
import sizes from '../../utils/sizes';

interface Theme {
  backgroundColor: string;
}

export const getStyles = (theme: Theme) => {
  return StyleSheet.create({
    iconButton: {
      paddingHorizontal: vw(14),
      borderColor: Colors.borderColor,
      borderRightWidth: 1,
      marginRight: vw(4),
    },
    iconStyle: {
      width: vw(20),
      height: vw(20),
      resizeMode: 'contain',
      tintColor:Colors.PRIMARY_GRAY,
    },
    phoneInput: {
      width: '100%',
      marginTop: 23,
      fontSize: sizes.inputText,
      backgroundColor: theme.backgroundColor,
      overflow: 'hidden',
    },
    errorContainer: {
      borderColor: Colors.RED,
    },
    errorText: {
      color: Colors.RED,
      fontSize: sizes.errorText,
      marginTop: vw(4),
      textAlign: 'left',
    },
    calendarImg: {
      width: vw(22),
      height: vw(22),
      resizeMode: 'contain',
    },
  })};