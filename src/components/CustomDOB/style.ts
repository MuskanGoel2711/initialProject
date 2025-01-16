import {StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/Dimensions';

export const styles =
  StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: vh(16),
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#ccc',
      width: '100%',
      backgroundColor: '#FFF',
    },
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
      backgroundColor: '#FFF',
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
  });