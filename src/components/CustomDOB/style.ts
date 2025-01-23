import {StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/Dimensions';

interface Theme {
  backgroundColor: string;
}

export const getStyles = (theme: Theme) => {
  return StyleSheet.create({
    iconButton: {
      paddingHorizontal: vw(14),
      borderColor: '#ccc',
      borderRightWidth: 1,
      marginRight: vw(4),
    },
    iconStyle: {
      width: vw(20),
      height: vw(20),
      resizeMode: 'contain',
      tintColor:'grey',
    },
    phoneInput: {
      width: '100%',
      marginTop: 23,
      fontSize: 15,
      backgroundColor: theme.backgroundColor,
      overflow: 'hidden',
    },
    errorContainer: {
      borderColor: 'red',
    },
    errorText: {
      color: 'red',
      fontSize: 14,
      marginTop: vw(4),
      textAlign: 'left',
    },
    calendarImg: {
      width: vw(22),
      height: vw(22),
      resizeMode: 'contain',
    },
  })};